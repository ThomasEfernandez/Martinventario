import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Producto } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';
import { Categoria } from '../../../categoria/interfaces/categoria-inteface';
import { CategoriaService } from '../../../categoria/services/categoria.service';
import { Proveedor } from '../../../proveedor/interfaces/proveedor-interface';
import { ProveedorService } from '../../../proveedor/services/proveedor.service';
import { Etiqueta } from '../../../etiqueta/interfaces/etiqueta.interface';
import { EtiquetaService } from '../../../etiqueta/services/etiqueta.service';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css',
})
export class AgregarProductoComponent {
  @Output()
  emitirProducto: EventEmitter<Producto> = new EventEmitter();

  fb = inject(FormBuilder);

  listaProveedores: Proveedor[] = [];
  proveedoresService = inject(ProveedorService);

  listaCategorias: Categoria[] = [];
  categoriaService = inject(CategoriaService);

  listaEtiquetas: Etiqueta[] | undefined = [];

  productoService = inject(ProductoService);
  productoAddCorrectamente: boolean = false;

  formulario = this.fb.nonNullable.group({
    id: [0],
    nombreProducto: ['', [Validators.required,Validators.minLength(1)]],
    marca: ['', [Validators.required]],
    proveedor: ['', Validators.required],
    cantidad: [0, [Validators.required,Validators.min(1)]],
    precioCompra: [0, [Validators.required,Validators.min(1)]],
    precioVenta: [0, [Validators.required,Validators.min(1)]],
    categoria: ['', Validators.required],
    etiquetas: [[''], Validators.required],
  });

  agregarProducto() {
    if (this.formulario.valid) {
      const producto = this.formulario.getRawValue();
      this.productoService.getProductos().subscribe({
        next: (productos: Producto[]) => {
          producto.id = productos.length + 1;
          this.emitirProducto.emit(producto);
          this.agregarProductoService(producto);
          this.productoAddCorrectamente=true;
        },
      });
      console.log(producto);


    }else{
      this.formulario.markAllAsTouched();
    }

  }

  agregarProductoService(producto: Producto) {
    this.productoService.postProducto(producto).subscribe({
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  listarProveedores() {
    this.proveedoresService.obtenerProveedores().subscribe({
      next: (proveedores: Proveedor[]) => {
        this.listaProveedores = proveedores;
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  listarCategorias() {
    this.categoriaService.getCategorias().subscribe({
      next: (categorias: Categoria[]) => {
        this.listaCategorias = categorias;
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  cat = '';

  ngOnInit(): void {
    this.listarCategorias();
    this.listarProveedores();
    document.getElementById('categoria')?.addEventListener('click', () => {
      const select = document.getElementById('categoria') as HTMLSelectElement;
      this.cat = select.value; // Obtener el valor seleccionado
      const cate = this.listaCategorias.find(
        (c) => c.nombreCategoria === this.cat
      );
      this.listaEtiquetas = cate?.etiquetas;
    });
  }
}
