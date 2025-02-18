import { Component } from '@angular/core';
import { NavbarEntradaComponent } from '../../../nav/components/navbar-entrada/navbar-entrada.component';
import { AgregarPedidoComponent } from 'app/pedido/components/agregar-pedido/agregar-pedido.component';

@Component({
  selector: 'app-pagina-agregar-pedido-repositor',
  standalone: true,
  imports: [NavbarEntradaComponent, AgregarPedidoComponent],
  templateUrl: './pagina-agregar-pedido-entradas.component.html',
  styleUrl: './pagina-agregar-pedido-entradas.component.css',
})
export class PaginaAgregarPedidoRepositorComponent {
  tipo: string = 'repositor';
}
