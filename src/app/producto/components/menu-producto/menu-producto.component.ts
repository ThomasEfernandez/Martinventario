import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-menu-producto',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu-producto.component.html',
  styleUrl: './menu-producto.component.css',
})
export class MenuProductoComponent {
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
}
