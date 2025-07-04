import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Categoria } from 'app/categoria/interfaces/categoria-inteface';
import { CategoriaService } from 'app/categoria/services/categoria.service';
import { Etiqueta } from 'app/etiqueta/interfaces/etiqueta.interface';
import { Producto } from 'app/producto/interfaces/producto.interface';
import { ProductoService } from 'app/producto/services/producto.service';
import { Proveedor } from 'app/proveedor/interfaces/proveedor-interface';
import { ProveedorService } from 'app/proveedor/services/proveedor.service';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-modificar-producto',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './modificar-producto.component.html',
  styleUrl: './modificar-producto.component.css',
})
export class ModificarProductoComponent {
  @Input() user: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    usuario: '',
    contrasena: '',
    tipo: '',
    estado: false
  };

  listaProveedores: Proveedor[] = [];
  listaCategorias: Categoria[] = [];
  listaEtiquetas: Etiqueta[] = [];

  proveedoresService = inject(ProveedorService);
  categoriaService = inject(CategoriaService);
  productoService = inject(ProductoService);
  router = inject(Router);
  fb = inject(FormBuilder);
  activaredRoutes = inject(ActivatedRoute);

  id: string | null = null;

  formulario = this.fb.nonNullable.group({
    id: [''],
    nombreProducto: ['', [Validators.required, Validators.minLength(1)]],
    marca: ['', Validators.required],
    proveedor: ['', Validators.required],
    cantidad: [0, [Validators.required, Validators.min(1)]],
    categoria: ['', Validators.required],
    etiqueta: ['', Validators.required],
  });

  ngOnInit(): void {
    this.listarCategoriasYProveedores().then(() => {
      this.activaredRoutes.paramMap.subscribe({
        next: (param) => {
          this.id = param.get('id');
          this.getProductoById(this.id);
        },
        error: (e: Error) => {
          console.log(e.message);
        },
      });
    });
  }

  listarCategoriasYProveedores(): Promise<void> {
    return new Promise((resolve) => {
      let categoriasCargadas = false;
      let proveedoresCargados = false;

      this.categoriaService.getCategorias().subscribe({
        next: (categorias: Categoria[]) => {
          this.listaCategorias = categorias;
          categoriasCargadas = true;
          if (proveedoresCargados) resolve();
        },
        error: (err: Error) => console.log(err.message),
      });

      this.proveedoresService.getProveedores().subscribe({
        next: (proveedores: Proveedor[]) => {
          this.listaProveedores = proveedores;
          proveedoresCargados = true;
          if (categoriasCargadas) resolve();
        },
        error: (err: Error) => console.log(err.message),
      });
    });
  }

  getProductoById(id: string | null) {
    if (!id) return;
    this.productoService.getProductoById(id).subscribe({
      next: (producto: Producto) => {
        this.formulario.patchValue(producto);

        // Cargar etiquetas según la categoría
        const categoriaSeleccionada = this.listaCategorias.find(
          (c) => c.nombreCategoria === producto.categoria
        );
        this.listaEtiquetas = categoriaSeleccionada?.etiquetas || [];

        // Establecer la etiqueta actual del producto
        this.formulario.controls['etiqueta'].setValue(producto.etiqueta);
      },
      error: () => {
        console.log('Error al obtener el producto.');
      },
    });
  }

  actualizarEtiquetas(event: Event) {
    const select = event.target as HTMLSelectElement;
    const categoriaSeleccionada = this.listaCategorias.find(
      (c) => c.nombreCategoria === select.value
    );
    this.listaEtiquetas = categoriaSeleccionada?.etiquetas || [];
    this.formulario.controls['etiqueta'].setValue('');
  }

  

  update() {
    if (this.formulario.invalid) return;
    const producto = this.formulario.getRawValue();
    this.productoService.putProducto(this.id, producto).subscribe({
      next: () => {
        console.log('Producto actualizado correctamente.');
        // Redirección condicional si se necesita
        // if (this.user.tipo === 'admin') {
        //   this.router.navigateByUrl('admin/productos');
        // } else {
        //   this.router.navigateByUrl('base/productos');
        // }
         this.mensajeExito = true;
         setTimeout (()=>{
        this.mensajeExito = false;
         },3000);
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }

  mensajeExito=false
  actualizarMensaje (){


  }
}
