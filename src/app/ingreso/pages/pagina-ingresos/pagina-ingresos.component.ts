import { Component } from '@angular/core';
import { ListarIngresosComponent } from 'app/ingreso/components/listar-ingresos/listar-ingresos.component';
import { MenuIngresoComponent } from 'app/ingreso/components/menu-ingreso/menu-ingreso.component';
import { NavbarComponent } from 'app/nav/components/navbar/navbar.component';

@Component({
  selector: 'app-pagina-ingresos',
  standalone: true,
  imports: [
    NavbarComponent,
    MenuIngresoComponent,
    ListarIngresosComponent,
  ],
  templateUrl: './pagina-ingresos.component.html',
  styleUrl: './pagina-ingresos.component.css',
})
export class PaginaIngresosComponent {
  tipo: string = 'admin';

  user = history.state.user;

  ngOnInit() {
    console.log("PAGINA INGRESOS", this.user)
  }
}
