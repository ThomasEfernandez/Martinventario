import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../../interfaces/Usuario.interface';

@Component({
  selector: 'app-agregar-usuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-usuario.component.html',
  styleUrl: './agregar-usuario.component.css'
})
export class AgregarUsuarioComponent {
  @Output()
  emitirUsuario: EventEmitter<Usuario> = new EventEmitter();

  usuario: Usuario = {
    id: 0,
    usuario: '',
    contrasena: ''
  }

  fb = inject(FormBuilder);

  formulario = this.fb.nonNullable.group(
    {
      usuario: ['', [Validators.required, Validators.minLength(4)]],
      contrasena: ['', [Validators.required, Validators.minLength(4)]]
    }
  )

  agregarUsuario() {
    if(this.formulario.invalid) return;

    const usuario = this.formulario.getRawValue();

    console.log(usuario);
    this.emitirUsuario.emit(this.usuario);
    console.log(this.usuario);
  }
}
