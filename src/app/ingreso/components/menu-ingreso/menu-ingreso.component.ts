import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-menu-ingreso',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-ingreso.component.html',
  styleUrl: './menu-ingreso.component.css',
})
export class MenuIngresoComponent {
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
