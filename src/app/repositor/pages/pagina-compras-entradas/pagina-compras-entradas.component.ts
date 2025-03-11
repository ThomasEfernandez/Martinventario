import { Component } from '@angular/core';
import { ListarComprasComponent } from 'app/compra/components/listar-compras/listar-compras.component';
import { MenuCompraComponent } from 'app/compra/components/menu-compra/menu-compra.component';
import { NavbarEntradaComponent } from 'app/nav/components/navbar-entrada/navbar-entrada.component';

@Component({
  selector: 'app-pagina-compras-repositor',
  standalone: true,
  imports: [
    NavbarEntradaComponent,
    MenuCompraComponent,
    ListarComprasComponent,
  ],
  templateUrl: './pagina-compras-entradas.component.html',
  styleUrl: './pagina-compras-entradas.component.css',
})
export class PaginaComprasRepositorComponent {
  tipo: string = 'repositor';
}
