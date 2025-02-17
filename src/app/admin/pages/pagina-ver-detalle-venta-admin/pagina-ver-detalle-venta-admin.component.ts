import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { VerDetalleVentaComponent } from 'app/venta/components/ver-detalle-egreso/ver-detalle-egreso.component';

@Component({
  selector: 'app-pagina-ver-detalle-venta-admin',
  standalone: true,
  imports: [NavbarAdminComponent, VerDetalleVentaComponent],
  templateUrl: './pagina-ver-detalle-venta-admin.component.html',
  styleUrl: './pagina-ver-detalle-venta-admin.component.css',
})
export class PaginaVerDetalleVentaAdminComponent {}
