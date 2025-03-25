import { Component } from '@angular/core';
import { ListarEntradasComponent } from 'app/entrada/components/listar-entradas/listar-entradas.component';
import { MenuEntradaComponent } from 'app/entrada/components/menu-entrada/menu-entrada.component';
import { NavbarAdminComponent } from 'app/nav/components/navbar-admin/navbar-admin.component';

@Component({
  selector: 'app-pagina-compras-admin',
  standalone: true,
  imports: [
    NavbarAdminComponent,
    MenuEntradaComponent,
    ListarEntradasComponent,
  ],
  templateUrl: './pagina-compras-admin.component.html',
  styleUrl: './pagina-compras-admin.component.css',
})
export class PaginaComprasAdminComponent {
  tipo: string = 'admin';
}
