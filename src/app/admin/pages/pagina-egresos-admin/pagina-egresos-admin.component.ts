import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { MenuEgresoComponent } from '../../../egreso/components/menu-egreso/menu-egreso.component';
import { ListarEgresosComponent } from '../../../egreso/components/listar-egresos/listar-egresos.component';

@Component({
  selector: 'app-pagina-egresos-admin',
  standalone: true,
  imports: [NavbarComponent, MenuEgresoComponent, ListarEgresosComponent],
  templateUrl: './pagina-egresos-admin.component.html',
  styleUrl: './pagina-egresos-admin.component.css',
})
export class PaginaEgresosAdminComponent {
  tipo: string = 'admin';
}
