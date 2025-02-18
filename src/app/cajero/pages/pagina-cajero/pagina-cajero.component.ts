import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { RealizarEgresoCajeroComponent } from '../../../venta/components/realizar-egreso-cajero/realizar-egreso-cajero.component';

@Component({
  selector: 'app-pagina-cajero',
  standalone: true,
  imports: [NavbarAdminComponent, RealizarEgresoCajeroComponent],
  templateUrl: './pagina-cajero.component.html',
  styleUrl: './pagina-cajero.component.css',
})
export class PaginaCajeroComponent {}
