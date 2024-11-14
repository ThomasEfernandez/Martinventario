import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { MenuProveedorAdminComponent } from 'app/proveedor/components/menu-proveedor-admin/menu-proveedor-admin.component';
import { ListarProveedorComponent } from 'app/proveedor/components/listar-proveedores/listar-proveedores.component';

@Component({
  selector: 'app-pagina-proveedores-admin',
  standalone: true,
  imports: [
    NavbarAdminComponent,
    MenuProveedorAdminComponent,
    ListarProveedorComponent,
  ],
  templateUrl: './pagina-proveedores-admin.component.html',
  styleUrl: './pagina-proveedores-admin.component.css',
})
export class PaginaProveedoresAdminComponent {
  tipo: string = 'admin';
}
