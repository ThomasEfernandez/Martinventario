import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { AgregarProveedorComponent } from '../../../proveedor/components/agregar-proveedor/agregar-proveedor.component';

@Component({
  selector: 'app-pagina-agregar-proveedor-admin',
  standalone: true,
  imports: [NavbarAdminComponent, AgregarProveedorComponent],
  templateUrl: './pagina-agregar-proveedor-admin.component.html',
  styleUrl: './pagina-agregar-proveedor-admin.component.css',
})
export class PaginaAgregarProveedorAdminComponent {
  tipo: string = 'admin';
}
