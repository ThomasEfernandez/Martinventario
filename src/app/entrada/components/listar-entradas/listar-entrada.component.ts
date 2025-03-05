import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Entrada } from 'app/entrada/interface/entrada.interface';
import { EntradaService } from 'app/repositor/services/entrada.service';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';
import { UsuarioService } from 'app/usuario/services/usuario.service';

@Component({
  selector: 'app-listar-entrada',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-entrada.component.html',
  styleUrl: './listar-entrada.component.css',
})
export class ListarEntradaComponent implements OnInit {
  /* listaUsuarios: Usuario[] = [];
  usuarioService = inject(UsuarioService);
  usu: Usuario | undefined = {
    id: '',
    nombre: '',
    apellido: '',
    usuario: '',
    contrasena: '',
    tipo: '',
    estado: false,
  };

  listar() {
    this.usuarioService.getUsuarios().subscribe({
      next: (usu: Usuario[]) => {
        this.listaUsuarios = usu.filter((user) => user.tipo === 'repositor');
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  ngOnInit() {
    this.listar();
  }

  activarRepositor(id: string | undefined) {
    const encontrado = this.listaUsuarios.find((e) => e.id === id);
    this.usu = encontrado;

    if (this.usu) {
      this.usu.estado = true;
      this.usuarioService.putUsuario(this.usu.id, this.usu).subscribe({
        error: (err: Error) => {
          console.log(err.message);
        },
      });
    }
  }

  desactivarRepositor(id: string | undefined) {
    const encontrado = this.listaUsuarios.find((e) => e.id === id);
    this.usu = encontrado;

    if (this.usu) {
      this.usu.estado = false;
      this.usuarioService.putUsuario(this.usu.id, this.usu).subscribe({
        error: (err: Error) => {
          console.log(err.message);
        },
      });
    }
  } */

  entradaServicios = inject(EntradaService);
  listaEntrada: Entrada[] = [];

  traerEntradas() {
    this.entradaServicios.getEntrada().subscribe({
      next: (aux: Entrada[]) => {
        console.log('Datos recibidos:', aux);
        this.listaEntrada = aux;
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }

  ngOnInit() {
    this.traerEntradas();
  }
}
