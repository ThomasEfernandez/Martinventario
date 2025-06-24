import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { AgregarPedidoComponent } from '../../../pedido/components/agregar-pedido/agregar-pedido.component';

@Component({
  selector: 'app-pagina-agregar-pedido-admin',
  standalone: true,
  imports: [NavbarComponent, AgregarPedidoComponent],
  templateUrl: './pagina-agregar-pedido-admin.component.html',
  styleUrl: './pagina-agregar-pedido-admin.component.css',
})
export class PaginaAgregarPedidoAdminComponent {
  tipo: string = 'admin';
}
