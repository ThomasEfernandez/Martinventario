import { Producto } from '../../../producto/interfaces/producto.interface';
import { ProductoService } from '../../../producto/services/producto.service';
import { Venta } from '../../interfaces/venta.interface';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { VentaService } from '../../services/venta.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-realizar-venta-admin',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './realizar-venta-admin.component.html',
  styleUrl: './realizar-venta-admin.component.css',
})
export class RealizarVentaAdminComponent {
  @Output()
  emitirVenta: EventEmitter<Venta> = new EventEmitter();

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
      this.ventasService.getVenta().subscribe({
        next: (ventas: Venta[]) => {
          venta.id = `${ventas.length + 1}`;

          const produ = this.listaProductos.find(
            (p) => p.nombreProducto === venta.producto
          );

          this.prodService.getProductoById(produ?.id).subscribe({
            next: (prod: Producto) => {
              console.log('entra');
              console.log('cantidad:' + venta.cantidad);
              console.log('precio venta:' + prod.precioVenta);
              venta.total = venta.cantidad * prod.precioVenta;
              console.log('total:' + venta.total);
              this.emitirVenta.emit(venta);
              this.agregarVentaService(venta);
              this.ventaRealizada = true;
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