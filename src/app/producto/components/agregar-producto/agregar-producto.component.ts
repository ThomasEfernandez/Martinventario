import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Producto } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';
import { Categoria } from '../../../categoria/interfaces/categoria-inteface';
import { CategoriaService } from '../../../categoria/services/categoria.service';
import { Proveedor } from '../../../proveedor/interfaces/proveedor-interface';
import { ProveedorService } from '../../../proveedor/services/proveedor.service';

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

  listaCategorias: Categoria[] = [];
  categoriaService = inject(CategoriaService);

  listaProveedores: Proveedor[] = [];
  proveedoresService = inject(ProveedorService);

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

  ngOnInit(): void {
    this.listarCategorias();
    this.listarProveedores();
  }
}
