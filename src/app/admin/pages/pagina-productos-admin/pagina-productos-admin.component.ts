import { Component } from '@angular/core';

import { ListarProductosComponent } from 'app/producto/components/listar-productos/listar-productos.component';
import { NavbarProductosAdminComponent } from '../../../nav/components/navbar-productos-admin/navbar-productos-admin.component';

@Component({
  selector: 'app-pagina-productos-admin',
  standalone: true,
  imports: [NavbarProductosAdminComponent, ListarProductosComponent],
  templateUrl: './pagina-productos-admin.component.html',
  styleUrl: './pagina-productos-admin.component.css',
})
export class PaginaProductosAdminComponent {}
