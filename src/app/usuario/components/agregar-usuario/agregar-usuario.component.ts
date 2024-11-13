import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../../interfaces/Usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
@Component({
  selector: 'app-agregar-usuario',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-usuario.component.html',
  styleUrl: './agregar-usuario.component.css',
})
export class AgregarUsuarioComponent {
  @Output()
  emitirUsuario = new EventEmitter<Usuario>();

  fb = inject(FormBuilder);

  formulario = this.fb.nonNullable.group({
    id: [0],
    usuario: ['', [Validators.required, Validators.minLength(4)]],
    contrasena: ['', [Validators.required, Validators.minLength(4)]],
    tipo: [''],
  });

  usuarioService = inject(UsuarioService);

  agregarUsuario() {
    if (this.formulario.invalid) return;
    const usuario = this.formulario.getRawValue();
    this.emitirUsuario.emit(usuario);
    this.agregarUsuarioService(usuario);
  }

  agregarUsuarioService(usuario: Usuario) {
    this.usuarioService.postUsuario(usuario).subscribe({
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }
}
