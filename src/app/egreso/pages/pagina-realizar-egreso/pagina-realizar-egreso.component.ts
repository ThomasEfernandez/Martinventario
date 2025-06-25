import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { RealizarEgresoComponent } from 'app/egreso/components/realizar-egreso/realizar-egreso.component';

@Component({
  selector: 'app-pagina-realizar-egreso',
  standalone: true,
  imports: [NavbarComponent, RealizarEgresoComponent],
  templateUrl: './pagina-realizar-egreso.component.html',
  styleUrl: './pagina-realizar-egreso.component.css',
})
export class PaginaRealizarEgresoComponent {
  user = history.state.user;

  ngOnInit() {
    console.log("PAGINA REALIZAR INGRESO", this.user)
  }
}
