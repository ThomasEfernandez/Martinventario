import { Component } from '@angular/core';
import { NavbarVistaProductosAdminComponent } from '../../../nav/components/navbar-admin/navbar-vista-productos-admin/navbar-vista-productos-admin.component'; 
import { ProductosComponent } from "../../../producto/productos/productos.component";
import { ListarProductosComponent } from "../../../producto/components/listar-productos/listar-productos.component";
import { AgregarProductoComponent } from "../../../producto/components/agregar-producto/agregar-producto.component";

@Component({
  selector: 'app-pagina-productos-admin',
  standalone: true,
  imports: [NavbarVistaProductosAdminComponent, ProductosComponent, ListarProductosComponent, AgregarProductoComponent],
  templateUrl: './pagina-productos-admin.component.html',
  styleUrl: './pagina-productos-admin.component.css'
})
export class PaginaProductosAdminComponent {

}
