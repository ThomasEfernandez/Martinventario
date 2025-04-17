import { Component } from '@angular/core';
import { NavbarCajeroComponent } from 'app/nav/components/navbar-cajero/navbar-cajero.component';
import { RealizarEgresoComponent } from 'app/egreso/components/realizar-egreso/realizar-egreso.component';

@Component({
  selector: 'app-pagina-realizar-venta-cajero',
  standalone: true,
  imports: [NavbarCajeroComponent, RealizarEgresoComponent],
  templateUrl: './pagina-realizar-venta-cajero.component.html',
  styleUrl: './pagina-realizar-venta-cajero.component.css',
})
export class PaginaRealizarVentaCajeroComponent {
  tipo: string = 'cajero';
}
