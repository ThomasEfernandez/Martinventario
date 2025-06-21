import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { ModificarProveedorComponent } from '../../components/modificar-proveedor/modificar-proveedor.component';

@Component({
  selector: 'app-pagina-modificar-proveedores',
  standalone: true,
  imports: [NavbarAdminComponent, ModificarProveedorComponent],
  templateUrl: './pagina-modificar-proveedores.component.html',
  styleUrl: './pagina-modificar-proveedores.component.css',
})
export class PaginaModificarProveedoresComponent {
  user = history.state.user;
}
