import { Component } from '@angular/core';
import { NavbarProveedoresRepositorComponent } from '../../../nav/components/navbar-proveedores-repositor/navbar-proveedores-repositor.component';
import { ListarProveedorComponent } from '../../../proveedor/components/listar-proveedores/listar-proveedores.component';

@Component({
  selector: 'app-pagina-proveedores-repositor',
  standalone: true,
  imports: [NavbarProveedoresRepositorComponent, ListarProveedorComponent],
  templateUrl: './pagina-proveedores-repositor.component.html',
  styleUrl: './pagina-proveedores-repositor.component.css',
})
export class PaginaProveedoresRepositorComponent {}
