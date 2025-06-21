import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { MenuProductoComponent } from '../../../producto/components/menu-producto/menu-producto.component';
import { ListarProductosComponent } from 'app/producto/components/listar-productos/listar-productos.component';

@Component({
  selector: 'app-pagina-productos',
  standalone: true,
  imports: [NavbarAdminComponent, MenuProductoComponent, ListarProductosComponent,],
  templateUrl: './pagina-productos.component.html',
  styleUrl: './pagina-productos.component.css',
})
export class PaginaProductosComponent {
  user = history.state.user;
}
