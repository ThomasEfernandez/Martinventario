import { Component, EventEmitter, inject, output } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Productos } from '../interfaces/Productos.interface';

@Component({
  selector: 'app-agregar-producto',
  standalone: true,
  imports: [NavbarComponent,ReactiveFormsModule],
  templateUrl: './agregar-producto.component.html',
  styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {

@Output()

emitirProducto: EventEmitter<Productos> = new EventEmitter();

fb = inject(FormBuilder);

formulario = this.fb.nonNullable.group ()

}
