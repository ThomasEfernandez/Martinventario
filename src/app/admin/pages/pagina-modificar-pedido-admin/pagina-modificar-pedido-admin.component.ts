import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { ModificarPedidoComponent } from '../../../pedido/components/modificar-pedido/modificar-pedido.component';

@Component({
  selector: 'app-pagina-modificar-pedido-admin',
  imports: [NavbarComponent, ModificarPedidoComponent],
  templateUrl: './pagina-modificar-pedido-admin.component.html',
  styleUrl: './pagina-modificar-pedido-admin.component.css',
})
export class PaginaModificarPedidoAdminComponent {
  tipo: string = 'admin';
}
