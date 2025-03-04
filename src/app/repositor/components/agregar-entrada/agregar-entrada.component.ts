import { EntradaService } from 'app/repositor/services/entrada.service';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';
import { UsuarioService } from '../../../usuario/services/usuario.service';
import { RouterModule } from '@angular/router';
import { Entrada } from 'app/repositor/interfaces/entrada.interface';

@Component({
  selector: 'app-agregar-entrada',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './agregar-entrada.component.html',
  styleUrl: './agregar-entrada.component.css',
})
export class AgregarEntradaComponent {
  @Input() entradaNueva: string = '';

  entradaService = inject(EntradaService);

  entradaAgregada: boolean = false;

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: ['', [Validators.required]],
    /* nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    usuario: ['', [Validators.required, Validators.minLength(4)]],
    contrasena: ['', [Validators.required, Validators.minLength(4)]],
    tipo: [''],
    estado: [true], */
    fecha: [
      new Date().getDate() +
        '/' +
        new Date().getMonth() +
        '/' +
        new Date().getFullYear(),
    ],
    producto: ['', [Validators.required]],
    cantidad: [0, [Validators.required]],
  });

  agregarEntrada() {
    if (this.formulario.valid) {
      const entradas = this.formulario.getRawValue();
      this.entradaService.getEntrada().subscribe({
        next: (entrada: Entrada[]) => {
          entradas.id = `${entrada.length + 1}`;
          /* usuario.tipo = this.entradaNueva; */
          this.agregarEntradaService(entradas);
          this.entradaAgregada = true;
        },
      });
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  agregarEntradaService(entrada: Entrada) {
    this.entradaService.postEntrada(entrada).subscribe({
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }
}
