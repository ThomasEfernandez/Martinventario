import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Usuario } from 'app/usuario/interfaces/usuario.interface';
import { UsuarioService } from 'app/usuario/services/usuario.service';

@Component({
    selector: 'app-listar-cajeros',
    imports: [RouterModule],
    templateUrl: './listar-cajeros.component.html',
    styleUrl: './listar-cajeros.component.css'
})
export class ListarCajerosComponent {
  usuarioService = inject(UsuarioService);
  listaUsuarios: Usuario[] = [];

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
        this.listaUsuarios = usu.filter((user) => user.tipo === 'cajero');
      },
      error: (err: Error) => {
        console.log(err.message);
      },
    });
  }

  ngOnInit() {
    this.listar();
  }

  activarCajero(id: string | undefined) {
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

  desactivarCajero(id: string | undefined) {
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
  }
}
