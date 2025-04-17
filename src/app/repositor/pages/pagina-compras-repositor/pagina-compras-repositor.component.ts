import { Component } from '@angular/core';
import { ListarIngresosComponent } from 'app/ingreso/components/listar-ingresos/listar-ingresos.component';
import { MenuIngresoComponent } from 'app/ingreso/components/menu-ingreso/menu-ingreso.component';
import { NavbarRepositorComponent } from 'app/nav/components/navbar-repositor/navbar-repositor.component';

@Component({
  selector: 'app-pagina-compras-repositor',
  standalone: true,
  imports: [
    NavbarRepositorComponent,
    MenuIngresoComponent,
    ListarIngresosComponent,
  ],
  templateUrl: './pagina-compras-repositor.component.html',
  styleUrl: './pagina-compras-repositor.component.css',
})
export class PaginaComprasRepositorComponent {
  tipo: string = 'repositor';
}
