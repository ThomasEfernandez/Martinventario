import { Component, inject } from '@angular/core';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';
import { UsuarioService } from 'app/usuario/services/usuario.service';

@Component({
  selector: 'app-listar-repositor',
  standalone: true,
  imports: [],
  templateUrl: './listar-repositor.component.html',
  styleUrl: './listar-repositor.component.css',
})
export class ListarRepositorComponent {
  listaUsuarios: Usuario[] = [];
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
