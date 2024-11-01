import { Component } from '@angular/core';
import { NavbarProductosAdminComponent } from '../../../nav/components/navbar-admin/navbar-productos-admin/navbar-productos-admin.component';
import { AgregarProductoComponent } from '../../../producto/components/agregar-producto/agregar-producto.component';
import { ListarProductosComponent } from '../../../producto/components/listar-productos/listar-productos.component';
import { AgregarProveedorComponent } from '../../../proveedor/components/agregar-proveedor/agregar-proveedor.component';

@Component({
  selector: 'app-pagina-productos-admin',
  standalone: true,
  imports: [
    NavbarProductosAdminComponent,
    ListarProductosComponent,
    AgregarProductoComponent,
    AgregarProveedorComponent,
  ],
  templateUrl: './pagina-productos-admin.component.html',
  styleUrl: './pagina-productos-admin.component.css',
})
export class PaginaProductosAdminComponent {}
