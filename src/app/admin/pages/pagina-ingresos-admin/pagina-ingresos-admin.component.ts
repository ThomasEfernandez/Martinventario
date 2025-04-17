import { Component } from '@angular/core';
import { ListarIngresosComponent } from 'app/ingreso/components/listar-ingresos/listar-ingresos.component';
import { MenuIngresoComponent } from 'app/ingreso/components/menu-ingreso/menu-ingreso.component';
import { NavbarAdminComponent } from 'app/nav/components/navbar-admin/navbar-admin.component';

@Component({
  selector: 'app-pagina-ingresos-admin',
  standalone: true,
  imports: [
    NavbarAdminComponent,
    MenuIngresoComponent,
    ListarIngresosComponent,
  ],
  templateUrl: './pagina-ingresos-admin.component.html',
  styleUrl: './pagina-ingresos-admin.component.css',
})
export class PaginaIngresosAdminComponent {
  tipo: string = 'admin';
}
