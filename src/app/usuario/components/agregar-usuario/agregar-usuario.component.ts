import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';
import { UsuarioService } from '../../services/usuario.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-agregar-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './agregar-usuario.component.html',
  styleUrl: './agregar-usuario.component.css',
})
export class AgregarUsuarioComponent {
  @Input() tipo: string | null = null;

  usuarioService = inject(UsuarioService);

  usuarioAgregado: boolean = false;

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

  agregarUsuario() {
    if (this.formulario.valid) {
      const usuario = this.formulario.getRawValue();
      this.usuarioService.getUsuarios().subscribe({
        next: (usuarios: Usuario[]) => {
          usuario.id = `${usuarios.length + 1}`;
          usuario.tipo = 'base';
          this.agregarUsuarioService(usuario);
          this.usuarioAgregado = true;
        },
      });
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  agregarUsuarioService(usuario: Usuario) {
    this.usuarioService.postUsuario(usuario).subscribe({
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }
}
