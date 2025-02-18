import { Component } from '@angular/core';
import { NavbarEntradaComponent } from '../../../nav/components/navbar-entrada/navbar-entrada.component';
import { MenuPedidoComponent } from '../../../pedido/components/menu-pedido/menu-pedido.component';
import { ListarPedidosComponent } from '../../../pedido/components/listar-pedidos/listar-pedidos.component';

@Component({
  selector: 'app-pagina-pedidos-repositor',
  standalone: true,
  imports: [
    NavbarEntradaComponent,
    MenuPedidoComponent,
    ListarPedidosComponent,
  ],
  templateUrl: './pagina-pedidos-entradas.component.html',
  styleUrl: './pagina-pedidos-entradas.component.css',
})
export class PaginaPedidosRepositorComponent {
  tipo: string = 'repositor';
}
