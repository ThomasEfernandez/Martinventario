import { Component } from '@angular/core';
import { NavbarCajeroComponent } from 'app/nav/components/navbar-cajero/navbar-cajero.component';
import { RealizarVentaComponent } from 'app/venta/components/realizar-venta/realizar-venta.component';

@Component({
  selector: 'app-pagina-realizar-venta-cajero',
  standalone: true,
  imports: [NavbarCajeroComponent, RealizarVentaComponent],
  templateUrl: './pagina-realizar-venta-cajero.component.html',
  styleUrl: './pagina-realizar-venta-cajero.component.css',
})
export class PaginaRealizarVentaCajeroComponent {
  tipo: string = 'cajero';
}
