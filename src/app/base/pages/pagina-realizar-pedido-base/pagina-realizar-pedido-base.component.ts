import { Component } from '@angular/core';
import { NavbarBaseComponent } from 'app/nav/components/navbar-base/navbar-base.component';
import { AgregarPedidoComponent } from 'app/pedido/components/agregar-pedido/agregar-pedido.component';

@Component({
  selector: 'app-pagina-realizar-pedido-base',
  imports: [AgregarPedidoComponent, NavbarBaseComponent],
  templateUrl: './pagina-realizar-pedido-base.component.html',
  styleUrl: './pagina-realizar-pedido-base.component.css',
})
export class PaginaRealizarPedidoBaseComponent {
  tipo: string = 'base';
}
