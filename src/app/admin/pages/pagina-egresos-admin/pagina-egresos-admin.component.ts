import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { MenuEgresoAdminComponent } from '../../../egreso/components/menu-egreso-admin/menu-egreso-admin.component';
import { ListarEgresosComponent } from '../../../egreso/components/listar-egresos/listar-egresos.component';

@Component({
  selector: 'app-pagina-egresos-admin',
  standalone: true,
  imports: [
    NavbarAdminComponent,
    MenuEgresoAdminComponent,
    ListarEgresosComponent,
  ],
  templateUrl: './pagina-egresos-admin.component.html',
  styleUrl: './pagina-egresos-admin.component.css',
})
export class PaginaEgresosAdminComponent {}
