import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { RealizarEgresoAdminComponent } from 'app/venta/components/realizar-venta-admin/realizar-venta-admin.component';

@Component({
  selector: 'app-pagina-realizar-egreso-admin',
  standalone: true,
  imports: [NavbarAdminComponent, RealizarEgresoAdminComponent],
  templateUrl: './pagina-realizar-egreso-admin.component.html',
  styleUrl: './pagina-realizar-egreso-admin.component.css',
})
export class PaginaRealizarEgresoAdminComponent {}
