import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';
import { UsuarioService } from 'app/usuario/services/usuario.service';
import emailjs from '@emailjs/browser';

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

  // recuperarContrasena() {
  //   if (this.formulario.invalid) return;
  //   const sesion = this.formulario.getRawValue();
  //   const user = this.buscarUsuario(sesion);

  //   if (user) {
  //     console.log(user.mail);
  //     user.contrasena
  //     /**
  //      * ACA IRIA LO DE NOGAR
  //      *
  //      * LA FORMA DE CONSEGUIR EL MAIL DEL USUARIO QUE ES INGRESADO EN EL INPUT ES CON:
  //      * user.mail
  //      * ESTO TE DEVUELVE EL MAIL EN FORMATO STRING DEL OBJETO user DE TIPO Usuario
  //      *
  //      * ESTA FUNCION SE EJECUTA CUANDO SE PRESIONA EL BOTON RECUPERAR CONTRASEÑA
  //      */
  //   }
  // }

  recuperarContrasena() {
    if (this.formulario.invalid) return;
    const sesion = this.formulario.getRawValue();
    const user = this.buscarUsuario(sesion);

    if (user) {
      console.log('Enviando contraseña a:', user.mail);

      emailjs
        .send(
          'gmailnogar',
          'template_j2lm5hg',
          {
            to_email: user.mail,
            contrasena: user.contrasena,
          },
          'PgrLA8Z8f560V_agx'
        )
        .catch((error) => {
          console.error('Error al enviar el correo:', error);
        });
    } else {
      console.log('Usuario no encontrado');
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
