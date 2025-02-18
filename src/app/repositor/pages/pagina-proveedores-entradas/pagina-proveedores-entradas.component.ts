import { Component } from '@angular/core';
import { NavbarEntradaComponent } from '../../../nav/components/navbar-entrada/navbar-entrada.component';
import { ListarProveedorComponent } from '../../../proveedor/components/listar-proveedores/listar-proveedores.component';
import { MenuProveedorComponent } from '../../../proveedor/components/menu-proveedor/menu-proveedor.component';

@Component({
  selector: 'app-pagina-proveedores-repositor',
  standalone: true,
  imports: [
    NavbarEntradaComponent,
    ListarProveedorComponent,
    MenuProveedorComponent,
  ],
  templateUrl: './pagina-proveedores-entradas.component.html',
  styleUrl: './pagina-proveedores-entradas.component.css',
})
export class PaginaProveedoresRepositorComponent {
  tipo: string = 'repositor';
}
