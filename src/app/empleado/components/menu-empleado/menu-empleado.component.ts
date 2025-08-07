import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-menu-empleado',
  imports: [RouterModule],
  templateUrl: './menu-empleado.component.html',
  styleUrl: './menu-empleado.component.css',
})
export class MenuEmpleadoComponent {
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
