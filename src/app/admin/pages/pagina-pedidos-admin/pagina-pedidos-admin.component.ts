import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { MenuPedidoComponent } from '../../../pedido/components/menu-pedido/menu-pedido.component';
import { ListarPedidosComponent } from '../../../pedido/components/listar-pedidos/listar-pedidos.component';

@Component({
  selector: 'app-pagina-pedidos-admin',
  standalone: true,
  imports: [NavbarAdminComponent, MenuPedidoComponent, ListarPedidosComponent],
  templateUrl: './pagina-pedidos-admin.component.html',
  styleUrl: './pagina-pedidos-admin.component.css',
})
export class PaginaPedidosAdminComponent {}
