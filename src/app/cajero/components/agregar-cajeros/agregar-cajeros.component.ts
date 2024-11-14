import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Cajero } from 'app/cajero/interfaces/cajero.interface';
import { CajeroService } from 'app/cajero/services/cajero.service';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';
import { UsuarioService } from 'app/usuario/services/usuario.service';

@Component({
  selector: 'app-agregar-cajeros',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './agregar-cajeros.component.html',
  styleUrl: './agregar-cajeros.component.css',
})
export class AgregarCajerosComponent {
  // @Output()
  // emitirCajero = new EventEmitter<Cajero>();
  // emitirUsuario = new EventEmitter<Usuario>();
  // fb = inject(FormBuilder);
  // formulario = this.fb.nonNullable.group({
  //   id: [''],
  //   usuario: ['', [Validators.required, Validators.minLength(4)]],
  //   contrasena: ['', [Validators.required, Validators.minLength(4)]],
  //   estado: [true],
  // });
  // fechaCreacion: Date = new Date();
  // cajeroAgregado: boolean = false;
  // usuarioService = inject(UsuarioService);
  // agregarCajero(fechaCreacion: Date) {
  //   if (this.formulario.invalid) return;
  //   const cajero = this.formulario.getRawValue();
  //   this.emitirUsuario.emit(cajero);
  //   this.agregarCajeroService(cajero);
  //   this.cajeroAgregado = true;
  // }
  // agregarCajeroService(cajero: Usuario) {
  //   this.usuarioService.postUsuario(cajero).subscribe({
  //     error: (err: Error) => {
  //       console.log(err.message);
  //     },
  //   });
  // }
}
