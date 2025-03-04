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
    id: [''],
    /* nombre: ['', [Validators.required]],
    apellido: ['', [Validators.required]],
    usuario: ['', [Validators.required, Validators.minLength(4)]],
    contrasena: ['', [Validators.required, Validators.minLength(4)]],
    tipo: [''],
    estado: [true], */
    fecha: [
      new Date().getDate() +
        '/' +
        (new Date().getMonth() + 1) +
        '/' +
        new Date().getFullYear(),
    ],
    producto: ['', [Validators.required, Validators.minLength(4)]],
    cantidad: [0, [Validators.required, Validators.min(1)]],
  });

  agregarEntrada() {
    console.log('Método agregarEntrada() ejecutado');

    if (this.formulario.valid) {
      console.log('Formulario válido:', this.formulario.getRawValue());

      const entradas = this.formulario.getRawValue();
      this.entradaService.getEntrada().subscribe({
        next: (entrada: Entrada[]) => {
          console.log('Entradas existentes:', entrada);

          entradas.id = `${entrada.length + 1}`;
          /* usuario.tipo = this.entradaNueva; */
          this.agregarEntradaService(entradas);
          this.entradaAgregada = true;
        },
      });
    } else {
      console.warn('Formulario inválido:', this.formulario.errors);
      this.formulario.markAllAsTouched();
    }
  }

  agregarEntradaService(entrada: Entrada) {
    this.entradaService.postEntrada(entrada).subscribe({
      next: () => {},
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }
}
