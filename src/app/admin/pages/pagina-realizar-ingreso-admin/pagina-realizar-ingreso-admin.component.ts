import { Component } from '@angular/core';
import { RealizarIngresoComponent } from 'app/ingreso/components/realizar-ingreso/realizar-ingreso.component';
import { NavbarAdminComponent } from 'app/nav/components/navbar-admin/navbar-admin.component';

@Component({
  selector: 'app-pagina-realizar-ingreso-admin',
  standalone: true,
  imports: [NavbarAdminComponent, RealizarIngresoComponent],
  templateUrl: './pagina-realizar-ingreso-admin.component.html',
  styleUrl: './pagina-realizar-ingreso-admin.component.css',
})
export class PaginaRealizarIngresoAdminComponent {
  tipo: string = 'admin';
}
