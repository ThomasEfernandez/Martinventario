import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { AgregarPedidoComponent } from '../../../pedido/components/agregar-pedido/agregar-pedido.component';

@Component({
    selector: 'app-pagina-agregar-pedido-admin',
    imports: [NavbarAdminComponent, AgregarPedidoComponent],
    templateUrl: './pagina-agregar-pedido-admin.component.html',
    styleUrl: './pagina-agregar-pedido-admin.component.css'
})
export class PaginaAgregarPedidoAdminComponent {
  tipo: string = 'admin';
}
