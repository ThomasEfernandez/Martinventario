import { FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Cajero } from '../interfaces/cajero.interface';

@Component({
  selector: 'app-agregar-cajero',
  standalone: true,
  imports: [],
  templateUrl: './agregar-cajero.component.html',
  styleUrl: './agregar-cajero.component.css'
})
export class AgregarCajeroComponent {
@Output()
emitirCajero: EventEmitter<Cajero>= new EventEmitter();
fp = inject (FormBuilder)
formulario = this.fp.nonNullable.group({
  id:[0],
  usuario:["",Validators.required],
  contrasena: ["",Validators.required],
  nroCaja:["", Validators.required],
  fechaCreacion: [new Date, Validators.required],
  estado:[false,Validators.required]
})
}
