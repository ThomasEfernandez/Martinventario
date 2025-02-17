import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { RealizarVentaCajeroComponent } from "../../../venta/components/realizar-venta-cajero/realizar-venta-cajero.component";

@Component({
  selector: 'app-pagina-cajero',
  standalone: true,
  imports: [NavbarAdminComponent, RealizarVentaCajeroComponent],
  templateUrl: './pagina-cajero.component.html',
  styleUrl: './pagina-cajero.component.css',
})
export class PaginaCajeroComponent {}
