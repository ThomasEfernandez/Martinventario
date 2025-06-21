import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-menu-categoria',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-categoria.component.html',
  styleUrl: './menu-categoria.component.css',
})
export class MenuCategoriaComponent {
  @Input() user: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    usuario: '',
    contrasena: '',
    tipo: '',
    estado: false
  };
}
