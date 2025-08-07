import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-menu-proveedor',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-proveedor.component.html',
  styleUrl: './menu-proveedor.component.css',
})
export class MenuProveedorComponent {
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
