import { Producto } from './../../../producto/interfaces/producto.interface';
import { ProductoService } from './../../../producto/services/producto.service';
import { Venta } from './../../../venta/interfaces/venta.interface';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { VentaService } from '../../../venta/services/venta.service';

@Component({
  selector: 'app-realizar-venta-cajero',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './realizar-venta-cajero.component.html',
  styleUrl: './realizar-venta-cajero.component.css',
})
export class RealizarVentaCajeroComponent {
  @Output()
  emitirVenta: EventEmitter<Venta> = new EventEmitter();
  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [0, Validators.required],
    total: [0, Validators.required],
    fecha: [new Date(), Validators.required],
    cajero: [0, Validators.required],
    productos: [[], Validators.required],
  });

  fecha = new Date();
  ventasService = inject(VentaService);
  prodService = inject(ProductoService);

  agregarVenta() {
    if (this.formulario.invalid) {
      return;
    }
    const venta = this.formulario.getRawValue();
    this.emitirVenta.emit(venta);
    this.agregarVentaService(venta);
  }

  agregarVentaService(venta: Venta) {
    this.ventasService.postVenta(venta).subscribe();
    venta.productos.forEach((aux) => {
      this.modificarStock(aux.cantidad, aux.elProducto.id);
    });
  }

  modificarStock(cantidad: number, id: number) {
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
}
