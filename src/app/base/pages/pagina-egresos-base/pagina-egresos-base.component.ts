import { Component } from '@angular/core';
import { ListarEgresosComponent } from 'app/egreso/components/listar-egresos/listar-egresos.component';
import { MenuEgresoComponent } from 'app/egreso/components/menu-egreso/menu-egreso.component';
import { NavbarBaseComponent } from 'app/nav/components/navbar-base/navbar-base.component';

@Component({
  selector: 'app-pagina-egresos-base',
  imports: [NavbarBaseComponent, MenuEgresoComponent, ListarEgresosComponent],
  templateUrl: './pagina-egresos-base.component.html',
  styleUrl: './pagina-egresos-base.component.css',
})
export class PaginaEgresosBaseComponent {
  tipo: string = 'base';
}
