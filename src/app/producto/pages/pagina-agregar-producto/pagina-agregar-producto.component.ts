import { Component } from '@angular/core';
import { AgregarProductoComponent } from "../../components/agregar-producto/agregar-producto.component";
import { NavbarVistaAdminComponent } from "../../../nav/components/navbar-admin/navbar-vista-admin/navbar-vista-admin.component";
import { ListarCategoriasComponent } from "../../../categoria/components/listar-categorias/listar-categorias.component";
import { ListarProductosComponent } from "../../components/listar-productos/listar-productos.component";
import { NavbarVistaProductosAdminComponent } from "../../../nav/components/navbar-admin/navbar-vista-productos-admin/navbar-vista-productos-admin.component";

@Component({
  selector: 'app-pagina-agregar-producto',
  standalone: true,
  imports: [AgregarProductoComponent, NavbarVistaAdminComponent, NavbarVistaAdminComponent, ListarCategoriasComponent, ListarProductosComponent, NavbarVistaProductosAdminComponent],
  templateUrl: './pagina-agregar-producto.component.html',
  styleUrl: './pagina-agregar-producto.component.css'
})
export class PaginaAgregarProductoComponent {

}
