import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { MenuVentaAdminComponent } from '../../../venta/components/menu-venta-admin/menu-venta-admin.component';
import { ListarVentasComponent } from '../../../venta/components/listar-ventas/listar-ventas.component';

@Component({
  selector: 'app-pagina-ventas-admin',
  standalone: true,
  imports: [
    NavbarAdminComponent,
    MenuVentaAdminComponent,
    ListarVentasComponent,
  ],
  templateUrl: './pagina-ventas-admin.component.html',
  styleUrl: './pagina-ventas-admin.component.css',
})
export class PaginaVentasAdminComponent {}
