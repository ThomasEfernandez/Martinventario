import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../../usuario/services/usuario.service';
import { Usuario } from '../../../usuario/interfaces/usuario.interface';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'app/auth/service/auth.service';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css',
})
export class IniciarSesionComponent {
  @Output()
  emitirUsuario = new EventEmitter<Usuario>();

  router = inject(Router);

  fb = inject(FormBuilder);

  formulario = this.fb.nonNullable.group({
    id: [''],
    usuario: ['', [Validators.required]],
    nombre: [''],
    apellido: [''],
    contrasena: ['', [Validators.required]],
    tipo: [''],
    estado: false,
  });

  usuarioService = inject(UsuarioService);
  authService = inject(AuthService);

  iniciarSesion() {
    if (this.formulario.invalid) return;
    const sesion = this.formulario.getRawValue();
    const user = this.buscarUsuario(sesion);
    if (user) {
      this.authService.logIn();
      switch (user.tipo) {
        case 'admin':
          console.log(user.tipo);
          this.router.navigate(['/admin']);
          break;
        case 'repositor':
          console.log(user.tipo);
          this.router.navigate(['/repositor']);
          break;
        case 'cajero':
          console.log(user.tipo);
          break;
      }
    } else {
      console.log('Credenciales incorrectas. Contáctese con el admin.');
    }
  }

  listaUsuarios: Usuario[] = [];

  buscarUsuario(i: Usuario): Usuario | undefined {
    const usuarios = this.usuarioService.getUsuarios().subscribe({
      next: (usuarios: Usuario[]) => {
        this.listaUsuarios = usuarios;
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
    const usuario: Usuario | undefined = this.listaUsuarios.find(
      (u) => u.usuario === i.usuario && u.contrasena === i.contrasena
    );
    return usuario;
  }
}
