import { Component } from '@angular/core';
import { ListarComprasComponent } from 'app/compra/components/listar-compras/listar-compras.component';
import { MenuCompraComponent } from 'app/compra/components/menu-compra/menu-compra.component';
import { NavbarRepositorComponent } from 'app/nav/components/navbar-repositor/navbar-repositor.component';

@Component({
  selector: 'app-pagina-compras-repositor',
  standalone: true,
  imports: [
    NavbarRepositorComponent,
    MenuCompraComponent,
    ListarComprasComponent,
  ],
  templateUrl: './pagina-compras-repositor.component.html',
  styleUrl: './pagina-compras-repositor.component.css',
})
export class PaginaComprasRepositorComponent {
  tipo: string = 'repositor';
}
