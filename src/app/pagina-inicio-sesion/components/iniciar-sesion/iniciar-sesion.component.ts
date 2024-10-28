import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../../usuario/services/usuario.service';
import { Usuario } from '../../../usuario/interfaces/usuario.interface';
import { Sesion } from '../../interfaces/sesion.interface';
import { Router, RouterModule } from '@angular/router';
import { NavbarInicioSesionComponent } from "../../../nav/components/navbar-inicio-sesion/navbar-inicio-sesion.component";

@Component({
  selector: 'app-iniciar-sesion',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, NavbarInicioSesionComponent],
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {
  
  @Output()
  emitirUsuario= new EventEmitter<Sesion>();

  fb = inject(FormBuilder);
  
  formulario = this.fb.nonNullable.group(
    {
      usuario: ['', [Validators.required]],
      contrasena: ['', [Validators.required]]
    }
  )

  usuarioService = inject(UsuarioService);

  iniciarSesion() {
    if(this.formulario.invalid) return;
    const sesion = this.formulario.getRawValue();
    if(this.buscarUsuario(sesion)) {
      this.emitirUsuario.emit(sesion);
      const u = this.buscarUsuario(sesion);
      console.log(u);
    }
    else {
      console.log("Credenciales incorrectas. Contáctese con el admin.");
    }
  }

  listaUsuarios: Usuario[] = [];

  buscarUsuario(i: Sesion) {
    const usuarios = this.usuarioService.getUsuarios().subscribe({
      next: (usuarios: Usuario[]) => {
        this.listaUsuarios = usuarios;
      },
      error: (err: Error) => {
        console.log(err.message)
      }
    });
    const usuario = this.listaUsuarios.find((u) => u.usuario === i.usuario && u.contrasena === i.contrasena);
    console.log(usuario);
    return usuario !== undefined;
  }
}
