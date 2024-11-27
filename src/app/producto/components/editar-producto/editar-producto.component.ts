import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';
import { Etiqueta } from 'app/etiqueta/interfaces/etiqueta.interface';
import { Producto } from 'app/producto/interfaces/producto.interface';
import { ProductoService } from 'app/producto/services/producto.service';
import { Proveedor } from 'app/proveedor/interfaces/proveedor-interface';
import { ProveedorService } from 'app/proveedor/services/proveedor.service';

@Component({
  selector: 'app-editar-producto',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css',
})
export class EditarProductoComponent {
  @Input() tipo: string = '';

  listaProveedores: Proveedor[] = [];
  proveedoresService = inject(ProveedorService);

  listaCategorias: Categoria[] = [];
  categoriaService = inject(CategoriaService);

  listaEtiquetas: Etiqueta[] | undefined = [];

  productoService = inject(ProductoService);

  router = inject(Router);

  id: string | null = null;
  activaredRoutes = inject(ActivatedRoute);

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [''],
    nombreProducto: ['', [Validators.required, Validators.minLength(1)]],
    marca: ['', [Validators.required]],
    proveedor: ['', Validators.required],
    cantidad: [0, [Validators.required, Validators.min(0)]],
    precioCompra: [0, [Validators.required, Validators.min(1)]],
    precioVenta: [0, [Validators.required, Validators.min(1)]],
    categoria: ['', Validators.required],
    etiqueta: ['', Validators.required],
  });

  getTareaById(id: string | null) {
    this.productoService.getProductoById(id).subscribe({
      next: (producto: Producto) => {
        this.formulario.controls['id'].setValue(producto.id);
        this.formulario.controls['nombreProducto'].setValue(
          producto.nombreProducto
        );
        this.formulario.controls['marca'].setValue(producto.marca);
        this.formulario.controls['proveedor'].setValue(producto.proveedor);
        this.formulario.controls['cantidad'].setValue(producto.cantidad);
        this.formulario.controls['precioCompra'].setValue(
          producto.precioCompra
        );
        this.formulario.controls['precioVenta'].setValue(producto.precioVenta);
        this.formulario.controls['categoria'].setValue(producto.categoria);
      },
      error: () => {
        console.log('error....');
      },
    });
  }

  update() {
    if (this.formulario.invalid) return;
    const producto = this.formulario.getRawValue();
    this.productoService.putProducto(this.id, producto).subscribe({
      next: () => {
        console.log('Actualizado');
        if (this.tipo === 'admin') {
          this.router.navigateByUrl('admin/productos');
        } else if (this.tipo === 'repositor') {
          this.router.navigateByUrl('repositor/productos');
        }
      },
      error: (e: Error) => {
        console.log(e.message);
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
    this.activaredRoutes.paramMap.subscribe({
      next: (param) => {
        this.id = param.get('id');
        this.getTareaById(this.id);
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
    document.getElementById('categoria')?.addEventListener('click', () => {
      const select = document.getElementById('categoria') as HTMLSelectElement;
      const categoria = this.listaCategorias.find(
        (c) => c.nombreCategoria === select.value
      );
      this.listaEtiquetas = categoria?.etiquetas;
    });
  }
}
