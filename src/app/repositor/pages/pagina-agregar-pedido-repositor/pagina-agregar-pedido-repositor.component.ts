import { Component } from '@angular/core';
import { NavbarRepositorComponent } from '../../../nav/components/navbar-repositor/navbar-repositor.component';
import { AgregarPedidoComponent } from 'app/pedido/components/agregar-pedido/agregar-pedido.component';

@Component({
    selector: 'app-pagina-agregar-pedido-repositor',
    imports: [NavbarRepositorComponent, AgregarPedidoComponent],
    templateUrl: './pagina-agregar-pedido-repositor.component.html',
    styleUrl: './pagina-agregar-pedido-repositor.component.css'
})
export class PaginaAgregarPedidoRepositorComponent {
  tipo: string = 'repositor';
}
