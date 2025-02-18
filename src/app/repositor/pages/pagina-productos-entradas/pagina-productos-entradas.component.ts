import { Component } from '@angular/core';
import { NavbarEntradaComponent } from '../../../nav/components/navbar-entrada/navbar-entrada.component';
import { MenuProductoComponent } from '../../../producto/components/menu-producto/menu-producto.component';
import { ListarProductosComponent } from '../../../producto/components/listar-productos/listar-productos.component';

@Component({
  selector: 'app-pagina-productos-repositor',
  standalone: true,
  imports: [
    NavbarEntradaComponent,
    MenuProductoComponent,
    ListarProductosComponent,
  ],
  templateUrl: './pagina-productos-entradas.component.html',
  styleUrl: './pagina-productos-entradas.component.css',
})
export class PaginaProductosRepositorComponent {
  tipo: string = 'repositor';
}
