import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { VerDetalleEgresoComponent } from 'app/venta/components/ver-detalle-egreso/ver-detalle-egreso.component';

@Component({
  selector: 'app-pagina-ver-detalle-venta-admin',
  standalone: true,
  imports: [NavbarAdminComponent, VerDetalleEgresoComponent],
  templateUrl: './pagina-ver-detalle-egreso-admin.component.html',
  styleUrl: './pagina-ver-detalle-egreso-admin.component.css',
})
export class PaginaVerDetalleEgresoAdminComponent {}
