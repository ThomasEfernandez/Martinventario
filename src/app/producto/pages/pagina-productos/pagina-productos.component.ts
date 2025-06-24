import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { MenuProductoComponent } from '../../../producto/components/menu-producto/menu-producto.component';
import { ListarProductosComponent } from 'app/producto/components/listar-productos/listar-productos.component';

@Component({
  selector: 'app-pagina-productos',
  standalone: true,
  imports: [NavbarComponent, MenuProductoComponent, ListarProductosComponent,],
  templateUrl: './pagina-productos.component.html',
  styleUrl: './pagina-productos.component.css',
})
export class PaginaProductosComponent {
  user = history.state.user;
}
