import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-menu-egreso',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-egreso.component.html',
  styleUrl: './menu-egreso.component.css',
})

export class MenuEgresoComponent {
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
