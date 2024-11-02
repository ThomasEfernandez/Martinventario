import { Component } from '@angular/core';
import { NavbarProveedoresAdminComponent } from '../../../nav/components/navbar-proveedores-admin/navbar-proveedores-admin.component';
import { ListarProveedorComponent } from 'app/proveedor/components/listar-proveedores/listar-proveedores.component';

@Component({
  selector: 'app-pagina-proveedores-admin',
  standalone: true,
  imports: [NavbarProveedoresAdminComponent, ListarProveedorComponent],
  templateUrl: './pagina-proveedores-admin.component.html',
  styleUrl: './pagina-proveedores-admin.component.css',
})
export class PaginaProveedoresAdminComponent {}
