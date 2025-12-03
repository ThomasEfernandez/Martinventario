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

  mensajeExito: string = '';
  mensajeError: string = '';

  recuperarContrasena() {
    if (this.formulario.invalid) return;
    const sesion = this.formulario.getRawValue();
    const user = this.buscarUsuario(sesion);
     
    if (user) {
      console.log('Enviando contraseña a:', user.mail);
      console.log (user)
      emailjs
        .send(
          'gmailagus',
          'template_1kgoi5y',
          {
            to_email: user.mail,
            contrasena: user.contrasena,
          },
          'I6ksycjb-Isi-XFGU'
        )
        .then(() => {
          this.mensajeExito =
            'Se envió un correo con las instrucciones para recuperar la contraseña.';
          this.mensajeError = '';
        })
        .catch((error) => {
          console.error('Error al enviar el correo:', error);
          this.mensajeError =
            'Ocurrió un error al enviar el correo. Intente nuevamente.';
          this.mensajeExito = '';
        });
    } else {
      console.log('Usuario no encontrado');
      this.mensajeError = 'El usuario no existe en el sistema.';
      this.mensajeExito = '';
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
