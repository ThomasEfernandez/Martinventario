import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { RealizarVentaAdminComponent } from 'app/venta/components/realizar-venta-admin/realizar-venta-admin.component';

@Component({
  selector: 'app-pagina-realizar-venta-admin',
  standalone: true,
  imports: [NavbarAdminComponent, RealizarVentaAdminComponent],
  templateUrl: './pagina-realizar-venta-admin.component.html',
  styleUrl: './pagina-realizar-venta-admin.component.css',
})
export class PaginaRealizarVentaAdminComponent {}
