import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { RealizarEgresoComponent } from 'app/egreso/components/realizar-egreso/realizar-egreso.component';

@Component({
  selector: 'app-pagina-realizar-egresos-admin',
  standalone: true,
  imports: [NavbarComponent, RealizarEgresoComponent],
  templateUrl: './pagina-realizar-egresos-admin.component.html',
  styleUrl: './pagina-realizar-egresos-admin.component.css',
})
export class PaginaRealizarEgresoAdminComponent {
  tipo: string = 'admin';
}
