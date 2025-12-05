import { RouterModule } from '@angular/router';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';
import { UsuarioService } from 'app/usuario/services/usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './listar-usuarios.component.html',
  styleUrl: './listar-usuarios.component.css',
})
export class ListarUsuariosComponent implements OnInit {
  @Input() user: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    usuario: '',
    contrasena: '',
    tipo: '',
    estado: false,
    mail: '',
  };

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
    mail: '',
  };

  //Filtrado de Productos, variables de busqueda
  empleadosFiltrados: Usuario[] = [];
  textoBusqueda: string = '';
  filtroEstado: string = '';

  listarUsuarios() {
    this.usuarioService.getUsuarios().subscribe({
      next: (usuarios: Usuario[]) => {
        this.listaUsuarios = usuarios;
        this.empleadosFiltrados = this.listaUsuarios;
      },
      error: (e: Error) => {
        console.log(e.message);
      },
    });
  }

  activarUsusario(id: string | undefined) {
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

  desactivarUsuario(id: string | undefined) {
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

  ngOnInit(): void {
    this.listarUsuarios();
  }

  /*Filtro por texto*/
  onBusquedaChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.textoBusqueda = input.value;
    this.aplicarFiltros();
  }

  /*Filtro por estado*/
  onEstadoChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.filtroEstado = select.value;
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    this.empleadosFiltrados = this.listaUsuarios.filter((usuario) => {
      /*Filtro por texto de búsqueda*/
      const cumpleTexto =
        !this.textoBusqueda ||
        usuario.nombre
          .toLowerCase()
          .includes(this.textoBusqueda.toLowerCase()) ||
        usuario.apellido
          .toLowerCase()
          .includes(this.textoBusqueda.toLowerCase()) ||
        usuario.usuario
          .toLowerCase()
          .includes(this.textoBusqueda.toLowerCase()) ||
        usuario.id.toString().includes(this.textoBusqueda);

      /*Filtro por estado*/
      const cumpleEstado =
        !this.filtroEstado ||
        (this.filtroEstado === 'desactivar' && usuario.estado === true) ||
        (this.filtroEstado === 'activar' && usuario.estado === false);

      return cumpleTexto && cumpleEstado;
    });
  }
}
