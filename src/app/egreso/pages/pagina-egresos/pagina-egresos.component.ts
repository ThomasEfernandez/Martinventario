import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { MenuEgresoComponent } from '../../components/menu-egreso/menu-egreso.component';
import { ListarEgresosComponent } from '../../components/listar-egresos/listar-egresos.component';

@Component({
  selector: 'app-pagina-egresos',
  standalone: true,
  imports: [NavbarComponent, MenuEgresoComponent, ListarEgresosComponent],
  templateUrl: './pagina-egresos.component.html',
  styleUrl: './pagina-egresos.component.css',
})
export class PaginaEgresosComponent {
  user = history.state.user;

  ngOnInit() {
    console.log("PAGINA EGRESOS", this.user)
  }
}
