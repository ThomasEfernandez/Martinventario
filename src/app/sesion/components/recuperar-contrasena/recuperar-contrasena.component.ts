import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';
import { UsuarioService } from 'app/usuario/services/usuario.service';

@Component({
  selector: 'app-recuperar-contrasena',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './recuperar-contrasena.component.html',
  styleUrl: './recuperar-contrasena.component.css',
})
export class RecuperarContrasenaComponent {
  usuarioService = inject(UsuarioService);

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [''],
    usuario: ['', [Validators.required]],
    nombre: [''],
    apellido: [''],
    contrasena: [''],
    tipo: [''],
    estado: false,
    mail: [''],
  });

  recuperarContrasena() {
    if (this.formulario.invalid) return;
    const sesion = this.formulario.getRawValue();
    const user = this.buscarUsuario(sesion);

    if (user) {
      console.log(user.mail);
      /**
       * ACA IRIA LO DE NOGAR
       * 
       * LA FORMA DE CONSEGUIR EL MAIL DEL USUARIO QUE ES INGRESADO EN EL INPUT ES CON:
       * user.mail
       * ESTO TE DEVUELVE EL MAIL EN FORMATO STRING DEL OBJETO user DE TIPO Usuario
       * 
       * ESTA FUNCION SE EJECUTA CUANDO SE PRESIONA EL BOTON RECUPERAR CONTRASEÑA
       */
    }
  }

  listaUsuarios: Usuario[] = [];

  buscarUsuario(i: Usuario): Usuario | undefined {
    const usuario: Usuario | undefined = this.listaUsuarios.find(
      (u) => u.usuario === i.usuario
    );
    return usuario;
  }

  listarUsuarios() {
    const usuarios = this.usuarioService.getUsuarios().subscribe({
      next: (usuarios: Usuario[]) => {
        this.listaUsuarios = usuarios;
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  ngOnInit() {
    this.listarUsuarios();
  }
}
