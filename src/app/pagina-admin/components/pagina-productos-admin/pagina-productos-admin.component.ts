import { Component } from '@angular/core';
import { NavbarVistaProductosAdminComponent } from '../../../nav/components/navbar-admin/navbar-vista-productos-admin/navbar-vista-productos-admin.component';
import { AgregarProductoComponent } from "../../../producto/components/agregar-producto/agregar-producto.component";
import { ListarProductosComponent } from '../../../producto/components/listar-productos/listar-productos.component';

@Component({
  selector: 'app-pagina-productos-admin',
  standalone: true,
  imports: [NavbarVistaProductosAdminComponent, ListarProductosComponent, AgregarProductoComponent],
  templateUrl: './pagina-productos-admin.component.html',
  styleUrl: './pagina-productos-admin.component.css'
})
export class PaginaProductosAdminComponent {

}
