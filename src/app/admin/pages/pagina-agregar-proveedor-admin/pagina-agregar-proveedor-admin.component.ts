import { Component } from '@angular/core';
import { NavbarDefaultAdminComponent } from '../../../nav/components/navbar-default-admin/navbar-default-admin.component';
import { AgregarProveedorAdminComponent } from '../../../proveedor/components/agregar-proveedor-admin/agregar-proveedor-admin.component';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';

@Component({
  selector: 'app-pagina-agregar-proveedor-admin',
  standalone: true,
  imports: [AgregarProveedorAdminComponent, NavbarAdminComponent],
  templateUrl: './pagina-agregar-proveedor-admin.component.html',
  styleUrl: './pagina-agregar-proveedor-admin.component.css',
})
export class PaginaAgregarProveedorAdminComponent {}
