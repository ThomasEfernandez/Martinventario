import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';
import { UsuarioService } from '../../../usuario/services/usuario.service';
import { RouterModule } from '@angular/router';
import { Entrada } from 'app/entrada/interface/entrada.interface';
import { EntradaService } from 'app/entrada/services/entrada.service';
import { Producto } from 'app/producto/interfaces/producto.interface';
import { ProductoService } from 'app/producto/services/producto.service';

@Component({
  selector: 'app-agregar-entrada',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './agregar-entrada.component.html',
  styleUrl: './agregar-entrada.component.css',
})
export class AgregarEntradaComponent {
  @Input() entradaNueva: string = '';

  ngOnInit(): void {
    this.cargarListaProd();
  }

  listaProductos: Producto[] = [];
  productoService = inject(ProductoService);

  entradaService = inject(EntradaService);

  entradaAgregada: boolean = false;

  fb = inject(FormBuilder);
  formulario = this.fb.nonNullable.group({
    id: [''],
    fecha: [
      new Date().getDate() +
        '/' +
        (new Date().getMonth() + 1) +
        '/' +
        new Date().getFullYear(),
    ],
    idProducto: [''],
    producto: ['', Validators.required],
    cantidad: [0, [Validators.required, Validators.min(1)]],
  });

  agregarEntrada() {
    console.log('Método agregarEntrada() ejecutado');

    if (this.formulario.valid) {
      console.log('Formulario válido:', this.formulario.getRawValue());

      const entradas = this.formulario.getRawValue();

      this.listaProductos.forEach((p) => {
        if (p.producto === entradas.producto) {
          entradas.idProducto = p.id;
        }
      });

      this.entradaService.getEntrada().subscribe({
        next: (entrada: Entrada[]) => {
          console.log('Entradas existentes:', entrada);
          entradas.id = `${entrada.length + 1}`;
          this.agregarEntradaService(entradas);
          this.entradaAgregada = true;
        },
      });
    } else {
      console.warn('Formulario inválido:', this.formulario.errors);
      this.formulario.markAllAsTouched();
    }
  }

  buscarIdProducto(producto: string, prod: Producto) {
    this.listaProductos.forEach((p) => {
      if (p.producto === producto) {
        prod = p;
      }
    });
  }

  agregarEntradaService(entrada: Entrada) {
    this.entradaService.postEntrada(entrada).subscribe({
      next: () => {},
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  cargarListaProd() {
    this.productoService.getProductos().subscribe({
      next: (productos: Producto[]) => {
        this.listaProductos = productos;
        console.log('lista cargada');
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }
}
