import { Component } from '@angular/core';
import { NavbarRepositorComponent } from '../../../nav/components/navbar-repositor/navbar-repositor.component';
import { MenuPedidoComponent } from '../../../pedido/components/menu-pedido/menu-pedido.component';
import { ListarPedidosComponent } from '../../../pedido/components/listar-pedidos/listar-pedidos.component';

@Component({
  selector: 'app-pagina-pedidos-repositor',
  standalone: true,
  imports: [
    NavbarRepositorComponent,
    MenuPedidoComponent,
    ListarPedidosComponent,
  ],
  templateUrl: './pagina-pedidos-repositor.component.html',
  styleUrl: './pagina-pedidos-repositor.component.css',
})
export class PaginaPedidosRepositorComponent {
  tipo: string = 'repositor';
}
