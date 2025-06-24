import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { MenuPedidoComponent } from '../../../pedido/components/menu-pedido/menu-pedido.component';
import { ListarPedidosComponent } from '../../../pedido/components/listar-pedidos/listar-pedidos.component';

@Component({
  selector: 'app-pagina-pedidos-admin',
  standalone: true,
  imports: [NavbarComponent, MenuPedidoComponent, ListarPedidosComponent],
  templateUrl: './pagina-pedidos-admin.component.html',
  styleUrl: './pagina-pedidos-admin.component.css',
})
export class PaginaPedidosAdminComponent {
  tipo: string = 'admin';
}
