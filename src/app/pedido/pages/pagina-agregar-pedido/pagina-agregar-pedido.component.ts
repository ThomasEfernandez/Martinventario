import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { AgregarPedidoComponent } from '../../components/agregar-pedido/agregar-pedido.component';

@Component({
  selector: 'app-pagina-agregar-pedido',
  standalone: true,
  imports: [NavbarComponent, AgregarPedidoComponent],
  templateUrl: './pagina-agregar-pedido.component.html',
  styleUrl: './pagina-agregar-pedido.component.css',
})
export class PaginaAgregarPedidoComponent {
  tipo: string = 'admin';
}
