// import { Producto } from '../../interfaces/producto.interface';
import { Component, EventEmitter, inject,Output } from '@angular/core';
import { NavbarComponent } from "../../../nav/components/navbar/navbar.component";
import { FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
// import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {

  @Output()
  emitirProducto: EventEmitter<Producto> = new EventEmitter();

  producto:Producto = {
    id: 0,
    nombreProducto: '',
    marca: '',
    cantidad: 0,
    proveedor: '',
    precioVenta: 0,
    precioCompra: 0
  }

  fb = inject(FormBuilder);

  productoService = inject (ProductoService);

  formulario = this.fb.nonNullable.group(
    {
      nombreProducto: ['',Validators.required],
      marca: ['',Validators.required],
      proveedor: ['', Validators.required],
      cantidad: ['',Validators.required],
      precioCompra: ['',Validators.required],
      precioVenta: ['',Validators.required],
      categoria: ['' , Validators.required],
      etiquetas: [[''] , Validators.required]
    }
  )

  agregarProducto() {
    if (this.formulario.invalid) return;
    const producto = this.formulario.getRawValue();
    this.agregarProductoService(this.producto);
    this.emitirProducto.emit(this.producto);
  }

  agregarProductoService(producto: Producto) {
    this.productoService.postProducto(producto).subscribe();
  }

  //ES PARA MOSTRAR UN MENU DEPLEGABLE CON LAS CATEGORIAS Y DESPUES UNA PARA LAS ETIQUETAS

  // router = inject(Router);

  // listaCategorias = Categoria[] = [];

  // categoriaService = inject(CategoriaService);

  // ngOnInit(): void {
  //   this.listarCategorias();
  // }

  // listarCategorias() {
  //   this.categoriaService.getCategoria().subscribe(
  //     {
  //       next: (categorias: Categoria[]) => {
  //         this.listaCategorias = categorias
  //       },
  //       error: (err: Error) => {
  //         console.log(err.message)
  //       }
  //     }
  //   )
  // }
}

