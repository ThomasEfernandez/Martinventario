import { Component } from '@angular/core';
import { ListarIngresosComponent } from 'app/ingreso/components/listar-ingresos/listar-ingresos.component';
import { MenuIngresoComponent } from 'app/ingreso/components/menu-ingreso/menu-ingreso.component';
import { NavbarBaseComponent } from 'app/nav/components/navbar-base/navbar-base.component';

@Component({
  selector: 'app-pagina-ingresos-base',
  standalone: true,
  imports: [NavbarBaseComponent, MenuIngresoComponent, ListarIngresosComponent],
  templateUrl: './pagina-ingresos-base.component.html',
  styleUrl: './pagina-ingresos-base.component.css',
})
export class PaginaIngresosBaseComponent {
  tipo: string = 'base';
}
