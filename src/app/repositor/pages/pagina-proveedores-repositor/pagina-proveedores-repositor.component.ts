import { Component } from '@angular/core';
import { NavbarRepositorComponent } from '../../../nav/components/navbar-repositor/navbar-repositor.component';
import { ListarProveedorComponent } from '../../../proveedor/components/listar-proveedores/listar-proveedores.component';
import { MenuProveedorRepositorComponent } from '../../../proveedor/components/menu-proveedor-repositor/menu-proveedor-repositor.component';

@Component({
  selector: 'app-pagina-proveedores-repositor',
  standalone: true,
  imports: [
    NavbarRepositorComponent,
    ListarProveedorComponent,
    MenuProveedorRepositorComponent,
  ],
  templateUrl: './pagina-proveedores-repositor.component.html',
  styleUrl: './pagina-proveedores-repositor.component.css',
})
export class PaginaProveedoresRepositorComponent {}
