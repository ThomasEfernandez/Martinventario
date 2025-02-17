import { Producto } from '../../../producto/interfaces/producto.interface';
import { ProductoService } from '../../../producto/services/producto.service';
import { Venta } from '../../interfaces/egreso.interface';
import { Component, inject, Input } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { VentaService } from '../../services/venta.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-realizar-venta',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, RouterModule],
  templateUrl: './realizar-venta.component.html',
  styleUrl: './realizar-venta.component.css',
})
export class RealizarVentaComponent {
  @Input() tipo: string = '';

  router = inject(Router);

  ventasService = inject(VentaService);
  prodService = inject(ProductoService);

  producto: Producto | undefined = {
    id: '',
    nombreProducto: '',
    cantidad: 0,
    marca: '',
    proveedor: '',
    precioCompra: 0,
    precioVenta: 0,
    categoria: '',
    etiqueta: '',
  };

  listaProductos: Producto[] = [];

  listaMotivos: string[] = ['Venta', 'Caducacion', 'Recibido en mal estado']

  ventaRealizada: boolean = false;

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [''],
    /* total: [0], */
    fecha: [
      new Date().getDate() +
        '/' +
        new Date().getMonth() +
        '/' +
        new Date().getFullYear(),
    ],
    /* cajero: [0, Validators.required], */
    producto: ['', Validators.required],
    cantidad: [0, [Validators.required, Validators.min(1)]],
    motivo: ['', Validators.required]
  });

  agregarVenta() {
    if (this.formulario.valid) {
      const venta = this.formulario.getRawValue();
      this.ventasService.getVenta().subscribe({
        next: (ventas: Venta[]) => {
          venta.id = `${ventas.length + 1}`;
          const produ = this.listaProductos.find(
            (p) => p.nombreProducto === venta.producto
          );
          this.prodService.getProductoById(produ?.id).subscribe({
            next: (prod: Producto) => {
<<<<<<<< HEAD:src/app/venta/components/realizar-egreso-admin/realizar-venta-admin.component.ts
              console.log('entra');
              console.log('cantidad:' + venta.cantidad);
              /* console.log('precio venta:' + prod.precioVenta); */
              /* venta.total = venta.cantidad * prod.precioVenta;
              console.log('total:' + venta.total); */
              this.emitirVenta.emit(venta);
========
              venta.total = venta.cantidad * prod.precioVenta;
>>>>>>>> af96077d2afdf580aecad6df115aeabccdfd884d:src/app/venta/components/realizar-venta/realizar-venta.component.ts
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

  agregarVentaService(venta: Venta) {
    this.ventasService.postVenta(venta).subscribe({
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
