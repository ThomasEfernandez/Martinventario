import { Component } from '@angular/core';
import { NavbarCajeroComponent } from 'app/nav/components/navbar-cajero/navbar-cajero.component';
import { RealizarEgresosComponent } from 'app/egreso/components/realizar-egresos/realizar-egresos.component';

@Component({
  selector: 'app-pagina-realizar-venta-cajero',
  standalone: true,
  imports: [NavbarCajeroComponent, RealizarEgresosComponent],
  templateUrl: './pagina-realizar-venta-cajero.component.html',
  styleUrl: './pagina-realizar-venta-cajero.component.css',
})
export class PaginaRealizarVentaCajeroComponent {
  tipo: string = 'cajero';
}
