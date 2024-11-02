import { Component, Output, EventEmitter, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';
import { Etiqueta } from 'app/etiqueta/interfaces/etiqueta.interface';
import { Producto } from 'app/producto/interfaces/producto.interface';
import { ProductoService } from 'app/producto/services/producto.service';
import { Proveedor } from 'app/proveedor/interfaces/proveedor-interface';
import { ProveedorService } from 'app/proveedor/services/proveedor.service';

@Component({
  selector: 'app-agregar-producto-admin',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './agregar-producto-admin.component.html',
  styleUrl: './agregar-producto-admin.component.css',
})
export class AgregarProductoAdminComponent {
  @Output()
  emitirProducto: EventEmitter<Producto> = new EventEmitter();

  fb = inject(FormBuilder);

  listaProveedores: Proveedor[] = [];
  proveedoresService = inject(ProveedorService);

  listaCategorias: Categoria[] = [];
  categoriaService = inject(CategoriaService);

  listaEtiquetas: Etiqueta[] | undefined = [];

  productoService = inject(ProductoService);

  productoAgregado: boolean = false;

  formulario = this.fb.nonNullable.group({
    id: [0],
    nombreProducto: ['', [Validators.required, Validators.minLength(1)]],
    marca: ['', [Validators.required]],
    proveedor: ['', Validators.required],
    cantidad: [0, [Validators.required, Validators.min(1)]],
    precioCompra: [0, [Validators.required, Validators.min(1)]],
    precioVenta: [0, [Validators.required, Validators.min(1)]],
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
          this.productoAgregado = true;
        },
      });
    } else {
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
    this.proveedoresService.getProveedores().subscribe({
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

  ngOnInit(): void {
    this.listarCategorias();
    this.listarProveedores();
    document.getElementById('categoria')?.addEventListener('click', () => {
      const select = document.getElementById('categoria') as HTMLSelectElement;
      const categoria = this.listaCategorias.find(
        (c) => c.nombreCategoria === select.value
      );
      this.listaEtiquetas = categoria?.etiquetas;
    });
  }
}