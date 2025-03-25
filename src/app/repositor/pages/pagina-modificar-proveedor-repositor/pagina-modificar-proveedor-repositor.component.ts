import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { ModificarProveedorComponent } from '../../../proveedor/components/modificar-proveedor/modificar-proveedor.component';

@Component({
  selector: 'app-pagina-modificar-proveedor-repositor',
  standalone: true,
  imports: [NavbarAdminComponent, ModificarProveedorComponent],
  templateUrl: './pagina-modificar-proveedor-repositor.component.html',
  styleUrl: './pagina-modificar-proveedor-repositor.component.css',
})
export class PaginaModificarProveedorRepositorComponent {
  tipo: string = 'repositor';
}
