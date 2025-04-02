import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { MenuProveedorComponent } from 'app/proveedor/components/menu-proveedor/menu-proveedor.component';
import { ListarProveedorComponent } from 'app/proveedor/components/listar-proveedores/listar-proveedores.component';

@Component({
  selector: 'app-pagina-proveedores-admin',
  standalone: true,
  imports: [
    NavbarAdminComponent,
    MenuProveedorComponent,
    ListarProveedorComponent,
  ],
  templateUrl: './pagina-proveedores-admin.component.html',
  styleUrl: './pagina-proveedores-admin.component.css',
})
export class PaginaProveedoresAdminComponent {
  tipo: string = 'admin';
}
