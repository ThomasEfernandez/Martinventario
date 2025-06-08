import { Component } from '@angular/core';
import { RealizarIngresoComponent } from 'app/ingreso/components/realizar-ingreso/realizar-ingreso.component';
import { NavbarBaseComponent } from 'app/nav/components/navbar-base/navbar-base.component';

@Component({
  selector: 'app-pagina-realizar-ingreso-base',
  imports: [NavbarBaseComponent, RealizarIngresoComponent],
  templateUrl: './pagina-realizar-ingreso-base.component.html',
  styleUrl: './pagina-realizar-ingreso-base.component.css',
})
export class PaginaRealizarIngresoBaseComponent {
  tipo: string = 'base';
}
