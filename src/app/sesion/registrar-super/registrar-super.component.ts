import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrar-super',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registrar-super.component.html',
  styleUrl: './registrar-super.component.css'
})
export class RegistrarSuperComponent {

router = inject(Router)

fb =inject (FormBuilder)

formulario = this.fb.nonNullable.group ({




})




  registrarse(){

    
  }
}
