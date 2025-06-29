import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { ModificarPedidoComponent } from '../../components/modificar-pedido/modificar-pedido.component';

@Component({
  selector: 'app-pagina-modificar-pedido',
  imports: [NavbarComponent, ModificarPedidoComponent],
  templateUrl: './pagina-modificar-pedido.component.html',
  styleUrl: './pagina-modificar-pedido.component.css',
})
export class PaginaModificarPedidoComponent {
  user = history.state.user;
  ngOnInit() {
    console.log("PAGINA MODIFICAR PEDIDO", this.user);
  }
}
