import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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
nombreSuper:['',[Validators.required]],
usuario:['',[Validators.required]],
contrasena:['',[Validators.required]]
})




  registrarse(){ 
   if(this.formulario.invalid)return;
   const registro =this.formulario.getRawValue();
   
    
    
  }
}
