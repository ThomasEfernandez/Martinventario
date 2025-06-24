import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { MenuProveedorComponent } from 'app/proveedor/components/menu-proveedor/menu-proveedor.component';
import { ListarProveedorComponent } from 'app/proveedor/components/listar-proveedores/listar-proveedores.component';

@Component({
  selector: 'app-pagina-proveedores',
  standalone: true,
  imports: [NavbarComponent, MenuProveedorComponent, ListarProveedorComponent,],
  templateUrl: './pagina-proveedores.component.html',
  styleUrl: './pagina-proveedores.component.css',
})
export class PaginaProveedoresComponent {
  user = history.state.user;

  ngOnInit() {
    console.log("PAGINA PROVEEDORES", this.user)
  }
}
