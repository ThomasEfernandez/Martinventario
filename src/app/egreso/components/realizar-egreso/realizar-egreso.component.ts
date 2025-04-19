import { Producto } from '../../../producto/interfaces/producto.interface';
import { ProductoService } from '../../../producto/services/producto.service';
import { Egreso } from '../../interfaces/egreso.interface';
import { Component, inject, Input } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EgresoService } from '../../services/egreso.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-realizar-egreso',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterModule],
  templateUrl: './realizar-egreso.component.html',
  styleUrl: './realizar-egreso.component.css',
})
export class RealizarEgresoComponent {
  @Input() tipo: string = '';

  router = inject(Router);

  ventasService = inject(EgresoService);
  prodService = inject(ProductoService);

  producto: Producto | undefined = {
    id: '',
    nombreProducto: '',
    cantidad: 0,
    marca: '',
    proveedor: '',
    categoria: '',
    etiqueta: '',
  };

  listaProductos: Producto[] = [];

  ventaRealizada: boolean = false;

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [''],
    total: [0],
    fecha: [
      new Date().getDate() +
        '/' +
        new Date().getMonth() +
        '/' +
        new Date().getFullYear(),
    ],
    cajero: [0, Validators.required],
    producto: ['', Validators.required],
    cantidad: [0, [Validators.required, Validators.min(1)]],
  });

  agregarVenta() {
    if (this.formulario.valid) {
      const venta = this.formulario.getRawValue();
      this.ventasService.getEgreso().subscribe({
        next: (ventas: Egreso[]) => {
          venta.id = `${ventas.length + 1}`;
          const produ = this.listaProductos.find(
            (p) => p.nombreProducto === venta.producto
          );
          this.prodService.getProductoById(produ?.id).subscribe({
            next: (prod: Producto) => {
              //  venta.total = venta.cantidad * prod.precioVenta;
              this.agregarVentaService(venta);
              this.ventaRealizada = true;
              if (this.tipo === 'admin') {
                this.router.navigate([`/admin/venta/${venta.id}`]);
              } else if (this.tipo === 'cajero') {
                this.router.navigate([`/cajero/venta/${venta.id}`]);
              }
            },
            error: (err: Error) => {
              console.log(err.message);
            },
          });
        },
      });
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  agregarVentaService(venta: Egreso) {
    this.ventasService.postEgreso(venta).subscribe({
      error: (err: Error) => {
        console.log(err.message);
      },
    });
    const producto = this.listaProductos.find(
      (p) => p.nombreProducto === venta.producto
    );
    if (producto) {
      this.modificarStock(venta.cantidad, producto.id);
    }
  }

  modificarStock(cantidad: number, id: string | undefined) {
    this.prodService.getProductoById(id).subscribe({
      next: (aux: Producto) => {
        aux.cantidad = aux.cantidad - cantidad;
        this.prodService.putProducto(aux.id, aux).subscribe({
          next: () => {},
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

  traerProductos() {
    this.prodService.getProductos().subscribe({
      next: (productos: Producto[]) => {
        productos.forEach((p) => {
          if (p.cantidad > 0) {
            this.listaProductos.push(p);
          }
        });
      },
    });
  }

  ngOnInit() {
    this.traerProductos();
    document.getElementById('producto')?.addEventListener('click', () => {
      const select = document.getElementById('producto') as HTMLSelectElement;
      const producto = this.listaProductos.find(
        (p) => p.nombreProducto === select.value
      );
      this.producto = producto;
      if (this.producto) {
        this.formulario.controls['cantidad'].addValidators([
          Validators.max(this.producto.cantidad),
        ]);
      }
    });
  }
}
