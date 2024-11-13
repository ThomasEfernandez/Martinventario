import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { MenuProductoComponent } from '../../../producto/components/menu-producto/menu-producto.component';
import { ListarProductosComponent } from 'app/producto/components/listar-productos/listar-productos.component';
import { VolverAAdminComponent } from '../../../producto/components/volver-a-admin/volver-a-admin.component';

@Component({
  selector: 'app-pagina-productos-admin',
  standalone: true,
  imports: [
    NavbarAdminComponent,
    MenuProductoComponent,
    ListarProductosComponent,
    // VolverAAdminComponent,
  ],
  templateUrl: './pagina-productos-admin.component.html',
  styleUrl: './pagina-productos-admin.component.css',
})
export class PaginaProductosAdminComponent {}
