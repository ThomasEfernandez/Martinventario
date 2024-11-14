import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Cajero } from '../../interfaces/cajero.interface';
import { CajeroService } from '../../services/cajero.service';

@Component({
  selector: 'app-agregar-cajero',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-cajero.component.html',
  styleUrl: './agregar-cajero.component.css',
})
export class AgregarCajeroComponent {
  @Output()
  emitirCajero: EventEmitter<Cajero> = new EventEmitter();
  fp = inject(FormBuilder);
  formulario = this.fp.nonNullable.group({
    id: [''],
    usuario: ['', Validators.required],
    contrasena: ['', Validators.required],
    nroCaja: [0, Validators.required],
    fechaCreacion: [new Date(), Validators.required],
    estado: [true, Validators.required],
  });

   cajeroService=inject(CajeroService)

  agregarCajero(){
    const cajero: Cajero=this.formulario.getRawValue()
    this.cajeroService.postCajero(cajero).subscribe()
    this.emitirCajero.emit(cajero)
  }



}
