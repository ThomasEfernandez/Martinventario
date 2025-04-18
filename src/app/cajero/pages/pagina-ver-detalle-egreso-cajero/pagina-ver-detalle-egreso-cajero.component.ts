import { Component } from '@angular/core';
import { NavbarCajeroComponent } from 'app/nav/components/navbar-cajero/navbar-cajero.component';
import { VerDetalleEgresoComponent } from 'app/egreso/components/ver-detalle-egreso/ver-detalle-egreso.component';

@Component({
  selector: 'app-pagina-ver-detalle-egreso-cajero',
  standalone: true,
  imports: [NavbarCajeroComponent, VerDetalleEgresoComponent],
  templateUrl: './pagina-ver-detalle-egreso-cajero.component.html',
  styleUrl: './pagina-ver-detalle-egreso-cajero.component.css',
})
export class PaginaVerDetalleEgresoCajeroComponent {}
