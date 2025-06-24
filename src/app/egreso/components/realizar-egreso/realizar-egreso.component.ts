import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Egreso } from '../../interfaces/egreso.interface';
import { EgresoService } from '../../services/egreso.service';
import { Producto } from '../../../producto/interfaces/producto.interface';
import { ProductoService } from '../../../producto/services/producto.service';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-realizar-egreso',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './realizar-egreso.component.html',
  styleUrl: './realizar-egreso.component.css',
})

export class RealizarEgresoComponent {
  @Input() user: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    usuario: '',
    contrasena: '',
    tipo: '',
    estado: false
  };

  ngOnInit() {
    this.listarProductos();

    document.getElementById('producto')?.addEventListener('click', () => {
      const select = document.getElementById('producto') as HTMLSelectElement;
      this.producto = this.listaProductos.find(
        (p) => p.nombreProducto === select.value
      );
      if (this.producto) {
        this.formulario.controls['cantidad'].addValidators([
          Validators.max(this.producto.cantidad),
        ]);
      }
    });
  }

  egresoService = inject(EgresoService);
  productoService = inject(ProductoService);

  listaProductos: Producto[] = [];

  egresoRealizado: boolean = false;

  producto: Producto | undefined = {
    id: '',
    nombreProducto: '',
    cantidad: 0,
    marca: '',
    proveedor: '',
    categoria: '',
    etiqueta: '',
  };

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [''],
    fecha: [
      new Date().getDate() +
      '/' +
      (new Date().getMonth() + 1) +
      '/' +
      new Date().getFullYear(),
    ],
    usuario: [''],
    producto: ['', Validators.required],
    cantidad: [0, [Validators.required, Validators.min(1)]],
  });

  realizarEgreso() {
    if (this.formulario.valid) {
      const egreso: Egreso = this.formulario.getRawValue();
      // this.productoService.getProductoById(this.producto?.id).subscribe({
      // next: (producto: Producto) => {
      this.egresoService.getEgreso().subscribe({
        next: (e: Egreso[]) => {
          egreso.id = `${e.length + 1}`;
          egreso.usuario = this.user.usuario;
          this.realizarEgresoService(egreso);
          this.egresoRealizado = true;
        },
      })
      // },
      // });
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  realizarEgresoService(egreso: Egreso) {
    this.egresoService.postEgreso(egreso).subscribe({
      error: (err: Error) => {
        console.log(err.message);
      },
    });
    const producto = this.listaProductos.find(
      (p) => p.nombreProducto === egreso.producto
    );
    if (producto) {
      this.modificarStock(egreso.cantidad, producto.id);
    }
  }

  modificarStock(cantidad: number, id: string | undefined) {
    this.productoService.getProductoById(id).subscribe({
      next: (p: Producto) => {
        p.cantidad = p.cantidad - cantidad;
        this.productoService.patchProducto(p.id, p).subscribe({
          error(e: Error) {
            console.log(e.message);
          },
        });
      },
      error(e: Error) {
        console.log(e.message);
      },
    });
  }

  listarProductos() {
    this.productoService.getProductos().subscribe({
      next: (productos: Producto[]) => {
        this.listaProductos = productos;
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }
}
