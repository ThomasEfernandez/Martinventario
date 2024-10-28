import { Ventas } from './../../../venta/interfaces/Ventas.interface';
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
  emitirVenta: EventEmitter<Ventas> = new EventEmitter();
  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [0, Validators.required],
    total: [0, Validators.required],
    fecha: [new Date(), Validators.required],
    cajero: [0, Validators.required],
    producto: [[], Validators.required],
  });

  fecha = new Date();
  ventasService = inject(VentaService);
  agregarVenta() {
    if (this.formulario.invalid) {
      return;
    }
    const venta = this.formulario.getRawValue();
    this.emitirVenta.emit(venta);
    this.agregarVentaService(venta);
  }
  agregarVentaService(venta: Ventas) {
    this.ventasService.postVenta(venta).subscribe();
  }
}
