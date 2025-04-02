import { Component } from '@angular/core';
import { ListarEntradasComponent } from 'app/entrada/components/listar-entradas/listar-entradas.component';
import { MenuEntradaComponent } from 'app/entrada/components/menu-entrada/menu-entrada.component';
import { NavbarRepositorComponent } from 'app/nav/components/navbar-repositor/navbar-repositor.component';

@Component({
  selector: 'app-pagina-compras-repositor',
  standalone: true,
  imports: [
    NavbarRepositorComponent,
    MenuEntradaComponent,
    ListarEntradasComponent,
  ],
  templateUrl: './pagina-compras-repositor.component.html',
  styleUrl: './pagina-compras-repositor.component.css',
})
export class PaginaComprasRepositorComponent {
  tipo: string = 'repositor';
}
