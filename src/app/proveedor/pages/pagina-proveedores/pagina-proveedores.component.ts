import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { MenuProveedorComponent } from 'app/proveedor/components/menu-proveedor/menu-proveedor.component';
import { ListarProveedorComponent } from 'app/proveedor/components/listar-proveedores/listar-proveedores.component';

@Component({
  selector: 'app-pagina-proveedores',
  standalone: true,
  imports: [NavbarAdminComponent, MenuProveedorComponent, ListarProveedorComponent,],
  templateUrl: './pagina-proveedores.component.html',
  styleUrl: './pagina-proveedores.component.css',
})
export class PaginaProveedoresComponent {
  user = history.state.user;
  ngOnInit() {
    console.log(this.user)
  }
}
