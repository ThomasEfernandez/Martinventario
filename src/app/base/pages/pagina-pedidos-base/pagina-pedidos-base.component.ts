import { Component } from '@angular/core';
import { NavbarBaseComponent } from '../../../nav/components/navbar-base/navbar-base.component';
import { ListarPedidosComponent } from '../../../pedido/components/listar-pedidos/listar-pedidos.component';
import { MenuPedidoComponent } from 'app/pedido/components/menu-pedido/menu-pedido.component';

@Component({
  selector: 'app-pagina-pedidos-base',
  imports: [NavbarBaseComponent, ListarPedidosComponent, MenuPedidoComponent],
  templateUrl: './pagina-pedidos-base.component.html',
  styleUrl: './pagina-pedidos-base.component.css',
})
export class PaginaPedidosBaseComponent {
  tipo: string = 'base';
}
