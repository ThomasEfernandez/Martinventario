import { Component } from '@angular/core';
import { NavbarAdminComponent } from 'app/nav/components/navbar-admin/navbar-admin.component';
import { AgregarProveedorComponent } from 'app/proveedor/components/agregar-proveedor/agregar-proveedor.component';

@Component({
  selector: 'app-pagina-agregar-proveedor',
  standalone: true,
  imports: [NavbarAdminComponent, AgregarProveedorComponent],
  templateUrl: './pagina-agregar-proveedor.component.html',
  styleUrl: './pagina-agregar-proveedor.component.css',
})
export class PaginaAgregarProveedorComponent {
  user = history.state.user;
}
