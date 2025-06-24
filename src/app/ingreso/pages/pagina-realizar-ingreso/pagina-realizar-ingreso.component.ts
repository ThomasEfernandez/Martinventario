import { Component } from '@angular/core';
import { RealizarIngresoComponent } from 'app/ingreso/components/realizar-ingreso/realizar-ingreso.component';
import { NavbarComponent } from 'app/nav/components/navbar/navbar.component';

@Component({
  selector: 'app-pagina-realizar-ingreso',
  standalone: true,
  imports: [NavbarComponent, RealizarIngresoComponent],
  templateUrl: './pagina-realizar-ingreso.component.html',
  styleUrl: './pagina-realizar-ingreso.component.css',
})
export class PaginaRealizarIngresoComponent {
  tipo: string = 'admin';

  user = history.state.user;

  ngOnInit() {
    console.log("PAGINA REALIZAR INGRESO", this.user)
  }
}
