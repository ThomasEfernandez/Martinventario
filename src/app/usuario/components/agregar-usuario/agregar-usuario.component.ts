import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';
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
    id: [''],
    nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    usuario: ['', [Validators.required, Validators.minLength(4)]],
    contrasena: ['', [Validators.required, Validators.minLength(4)]],
    tipo: [''],
    estado: [true],
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
