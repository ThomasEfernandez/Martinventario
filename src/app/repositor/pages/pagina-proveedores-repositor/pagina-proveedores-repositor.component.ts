import { Component } from '@angular/core';
import { NavbarRepositorComponent } from '../../../nav/components/navbar-repositor/navbar-repositor.component';
import { ListarProveedorComponent } from '../../../proveedor/components/listar-proveedores/listar-proveedores.component';
import { MenuProveedorComponent } from '../../../proveedor/components/menu-proveedor/menu-proveedor.component';

@Component({
  selector: 'app-pagina-proveedores-repositor',
  standalone: true,
  imports: [
    NavbarRepositorComponent,
    ListarProveedorComponent,
    MenuProveedorComponent,
  ],
  templateUrl: './pagina-proveedores-repositor.component.html',
  styleUrl: './pagina-proveedores-repositor.component.css',
})
export class PaginaProveedoresRepositorComponent {
  tipo: string = 'repositor';
}
