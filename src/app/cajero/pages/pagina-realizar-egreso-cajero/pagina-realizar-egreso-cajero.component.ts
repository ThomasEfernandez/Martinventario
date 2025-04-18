import { Component } from '@angular/core';
import { NavbarCajeroComponent } from 'app/nav/components/navbar-cajero/navbar-cajero.component';
import { RealizarEgresoComponent } from 'app/egreso/components/realizar-egreso/realizar-egreso.component';

@Component({
  selector: 'app-pagina-realizar-egreso-cajero',
  standalone: true,
  imports: [NavbarCajeroComponent, RealizarEgresoComponent],
  templateUrl: './pagina-realizar-egreso-cajero.component.html',
  styleUrl: './pagina-realizar-egreso-cajero.component.css',
})
export class PaginaRealizarEgresoCajeroComponent {
  tipo: string = 'cajero';
}
