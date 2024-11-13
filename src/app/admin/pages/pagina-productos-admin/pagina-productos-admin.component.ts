import { Component } from '@angular/core';

import { ListarProductosComponent } from 'app/producto/components/listar-productos/listar-productos.component';
import { MenuProductoComponent } from "../../../producto/components/menu-producto/menu-producto.component";
import { VolverAAdminComponent } from "../../../producto/components/volver-a-admin/volver-a-admin.component";
import { NavbarDefaultAdminComponent } from "../../../nav/components/navbar-default-admin/navbar-default-admin.component";

@Component({
  selector: 'app-pagina-productos-admin',
  standalone: true,
  imports: [ ListarProductosComponent, MenuProductoComponent, VolverAAdminComponent, NavbarDefaultAdminComponent],
  templateUrl: './pagina-productos-admin.component.html',
  styleUrl: './pagina-productos-admin.component.css',
})
export class PaginaProductosAdminComponent {}
