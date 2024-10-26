import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../../interfaces/Usuario.interface';
<<<<<<<< HEAD:src/app/Usuario/agregar-usuario/agregar-usuario.component.ts
========
import { UsuarioService } from '../../services/usuario.service';
>>>>>>>> 6ee5caf88638451d5f42e13d47040e2dd936a44d:src/app/usuario/components/agregar-usuario/agregar-usuario.component.ts

@Component({
  selector: 'app-agregar-usuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-usuario.component.html',
  styleUrl: './agregar-usuario.component.css'
})
export class AgregarUsuarioComponent {
  @Output()
  emitirUsuario= new EventEmitter<Usuario>();

  fb = inject(FormBuilder);

  formulario = this.fb.nonNullable.group(
    {
      id: [0],
      usuario: ['', [Validators.required, Validators.minLength(4)]],
      contrasena: ['', [Validators.required, Validators.minLength(4)]]
    }
  )

  usuarioService = inject(UsuarioService);

  agregarUsuario() {
    if(this.formulario.invalid) return;
    const usuario = this.formulario.getRawValue();
    this.emitirUsuario.emit(usuario);
    this.agregarApi(usuario);
  }

  agregarApi(usuario: Usuario) {
    this.usuarioService.postUsuario(usuario).subscribe({
      // next: (usuario: Usuario) => {
      //   alert('Usuario ingresado... $usuario.usuario');
      // },
      error: (err: Error) => {
        console.log(err.message);
      }
    })
  }
}
