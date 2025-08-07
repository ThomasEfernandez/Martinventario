import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-menu-secciones',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-secciones.component.html',
  styleUrl: './menu-secciones.component.css',
})
export class MenuSeccionesComponent {
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
