import { Component } from '@angular/core';
import { NavbarVistaProductosAdminComponent } from '../../../nav/components/navbar-admin/navbar-vista-productos-admin/navbar-vista-productos-admin.component';
import { AgregarProductoComponent } from "../../../producto/components/agregar-producto/agregar-producto.component";
import { ListarProductosComponent } from '../../../producto/components/listar-productos/listar-productos.component';
import { AgregarProveedorComponent } from "../../../proveedor/components/agregar-proveedor/agregar-proveedor.component";

@Component({
  selector: 'app-pagina-productos-admin',
  standalone: true,
  imports: [NavbarVistaProductosAdminComponent, ListarProductosComponent, AgregarProductoComponent, AgregarProveedorComponent],
  templateUrl: './pagina-productos-admin.component.html',
  styleUrl: './pagina-productos-admin.component.css'
})
export class PaginaProductosAdminComponent {

}
