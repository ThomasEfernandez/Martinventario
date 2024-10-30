// import { Producto } from '../../interfaces/producto.interface';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
// import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule, RouterModule],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css',
})
export class AgregarProductoComponent {
  @Output()
  emitirProducto: EventEmitter<Producto> = new EventEmitter();

  fb = inject(FormBuilder);

  productoService = inject(ProductoService);

  formulario = this.fb.nonNullable.group({
    id: [0],
    nombreProducto: ['', Validators.required],
    marca: ['', Validators.required],
    proveedor: ['', Validators.required],
    cantidad: [0, Validators.required],
    precioCompra: [0, Validators.required],
    precioVenta: [0, Validators.required],
    categoria: ['', Validators.required],
    etiquetas: [[''], Validators.required],
  });

  agregarProducto() {
    if (this.formulario.invalid) return;
    const producto = this.formulario.getRawValue();
    this.emitirProducto.emit(producto);
    this.agregarProductoService(producto);
  }

  agregarProductoService(producto: Producto) {
    this.productoService.postProducto(producto).subscribe({
      error: (err: Error) => {
        console.log(err.message);
      },
    });
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
