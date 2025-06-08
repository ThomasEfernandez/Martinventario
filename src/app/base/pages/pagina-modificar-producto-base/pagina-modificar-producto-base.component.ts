import { Component } from '@angular/core';
import { NavbarAdminComponent } from "../../../nav/components/navbar-admin/navbar-admin.component";
import { NavbarBaseComponent } from "../../../nav/components/navbar-base/navbar-base.component";
import { EditarProductoComponent } from 'app/producto/components/editar-producto/editar-producto.component';

@Component({
  selector: 'app-pagina-modificar-producto-base',
  imports: [NavbarBaseComponent, EditarProductoComponent],
  templateUrl: './pagina-modificar-producto-base.component.html',
  styleUrl: './pagina-modificar-producto-base.component.css',
})
export class PaginaModificarProductoBaseComponent {
  tipo: string = 'base';
}
