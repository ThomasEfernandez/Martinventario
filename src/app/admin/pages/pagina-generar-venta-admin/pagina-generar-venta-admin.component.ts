import { Component } from '@angular/core';
import { NavbarAdminComponent } from "../../../nav/components/navbar-admin/navbar-admin.component";
import { RealizarVentaCajeroComponent } from "../../../venta/components/realizar-venta-cajero/realizar-venta-cajero.component";

@Component({
  selector: 'app-pagina-generar-venta-admin',
  standalone: true,
  imports: [NavbarAdminComponent, RealizarVentaCajeroComponent],
  templateUrl: './pagina-generar-venta-admin.component.html',
  styleUrl: './pagina-generar-venta-admin.component.css'
})
export class PaginaGenerarVentaAdminComponent {

}
