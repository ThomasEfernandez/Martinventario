import { Component } from '@angular/core';
import { RealizarEgresoComponent } from 'app/egreso/components/realizar-egreso/realizar-egreso.component';
import { NavbarBaseComponent } from 'app/nav/components/navbar-base/navbar-base.component';

@Component({
  selector: 'app-pagina-realizar-egreso-base',
  imports: [NavbarBaseComponent, RealizarEgresoComponent],
  templateUrl: './pagina-realizar-egreso-base.component.html',
  styleUrl: './pagina-realizar-egreso-base.component.css',
})
export class PaginaRealizarEgresoBaseComponent {
  tipo: string = 'base';
}
