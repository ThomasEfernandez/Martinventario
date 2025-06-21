import { Component, inject, Input, OnInit } from '@angular/core';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';
import { UsuarioService } from 'app/usuario/services/usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './listar-usuarios.component.html',
  styleUrl: './listar-usuarios.component.css',
})
export class ListarUsuariosComponent implements OnInit {
  ngOnInit(): void {
    this.listarUsuarios();
  }
  @Input() tipo: string = 'admin';

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

  listarUsuarios() {
    this.usuarioService.getUsuarios().subscribe({
      next: (usuarios: Usuario[]) => {
        this.listaUsuarios = usuarios;
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }

  usuarioActivo(id: string | undefined) {
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

  usuarioDesactivado(id: string | undefined) {
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
