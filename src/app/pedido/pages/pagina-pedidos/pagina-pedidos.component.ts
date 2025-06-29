import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { MenuPedidoComponent } from '../../components/menu-pedido/menu-pedido.component';
import { ListarPedidosComponent } from '../../components/listar-pedidos/listar-pedidos.component';

@Component({
  selector: 'app-pagina-pedidos',
  standalone: true,
  imports: [NavbarComponent, MenuPedidoComponent, ListarPedidosComponent],
  templateUrl: './pagina-pedidos.component.html',
  styleUrl: './pagina-pedidos.component.css',
})
export class PaginaPedidosComponent {
  user = history.state.user;
  ngOnInit() {
    console.log(this.user);
  }
}
