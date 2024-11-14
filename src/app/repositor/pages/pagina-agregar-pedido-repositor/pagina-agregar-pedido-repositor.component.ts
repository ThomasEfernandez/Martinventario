import { Component } from '@angular/core';
import { NavbarRepositorComponent } from '../../../nav/components/navbar-repositor/navbar-repositor.component';
import { AgregarPedidoRepositorComponent } from 'app/pedido/components/agregar-pedido-repositor/agregar-pedido-repositor.component';

@Component({
  selector: 'app-pagina-agregar-pedido-repositor',
  standalone: true,
  imports: [NavbarRepositorComponent, AgregarPedidoRepositorComponent],
  templateUrl: './pagina-agregar-pedido-repositor.component.html',
  styleUrl: './pagina-agregar-pedido-repositor.component.css',
})
export class PaginaAgregarPedidoRepositorComponent {}
