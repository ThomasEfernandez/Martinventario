import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { ModificarProveedorComponent } from '../../../proveedor/components/modificar-proveedor/modificar-proveedor.component';

@Component({
  selector: 'app-pagina-modificar-proveedores-admin',
  standalone: true,
  imports: [NavbarAdminComponent, ModificarProveedorComponent],
  templateUrl: './pagina-modificar-proveedores-admin.component.html',
  styleUrl: './pagina-modificar-proveedores-admin.component.css',
})
export class PaginaModificarProveedoresAdminComponent {
  tipo: string = 'admin';
}
