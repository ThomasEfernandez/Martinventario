import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-menu-pedido',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-pedido.component.html',
  styleUrl: './menu-pedido.component.css',
})
export class MenuPedidoComponent {
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
