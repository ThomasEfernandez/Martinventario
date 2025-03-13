import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { MenuVentaAdminComponent } from '../../../venta/components/menu-venta-admin/menu-venta-admin.component';
import { ListarEgresosComponent } from '../../../venta/components/listar-egresos/listar-egresos.component';

@Component({
  selector: 'app-pagina-ventas-admin',
  standalone: true,
  imports: [
    NavbarAdminComponent,
    MenuVentaAdminComponent,
    ListarEgresosComponent,
  ],
  templateUrl: './pagina-egresos-admin.component.html',
  styleUrl: './pagina-egresos-admin.component.css',
})
export class PaginaEgresosAdminComponent {}
