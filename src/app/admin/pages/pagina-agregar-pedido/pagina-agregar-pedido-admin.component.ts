import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { AgregarPedidoAdminComponent } from '../../../pedido/components/agregar-pedido/agregar-pedido-admin.component';

@Component({
  selector: 'app-pagina-agregar-pedido-admin',
  standalone: true,
  imports: [NavbarAdminComponent, AgregarPedidoAdminComponent],
  templateUrl: './pagina-agregar-pedido-admin.component.html',
  styleUrl: './pagina-agregar-pedido-admin.component.css',
})
export class PaginaAgregarPedidoAdminComponent {}
