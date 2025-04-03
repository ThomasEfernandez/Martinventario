import { Component } from '@angular/core';
import { ListarEntradasComponent } from 'app/entrada/components/listar-entradas/listar-entradas.component';
import { MenuEntradaComponent } from 'app/entrada/components/menu-entrada/menu-entrada.component';
import { NavbarAdminComponent } from 'app/nav/components/navbar-admin/navbar-admin.component';

@Component({
  selector: 'app-pagina-entradas-base',
  standalone: true,
  imports: [
    NavbarAdminComponent,
    MenuEntradaComponent,
    ListarEntradasComponent,
  ],
  templateUrl: './pagina-entradas-base.component.html',
  styleUrl: './pagina-entradas-base.component.css',
})
export class PaginaEntradasBaseComponent {
  tipo: string = 'base';
}
