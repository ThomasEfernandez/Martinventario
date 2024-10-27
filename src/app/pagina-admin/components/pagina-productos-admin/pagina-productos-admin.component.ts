import { Component } from '@angular/core';
import { NavbarVistaAdminComponent } from '../../../nav/components/navbar-admin/navbar-vista-admin/navbar-vista-admin.component';
import { ProductosComponent } from "../../../producto/productos/productos.component";

@Component({
  selector: 'app-pagina-productos-admin',
  standalone: true,
  imports: [NavbarVistaAdminComponent, ProductosComponent],
  templateUrl: './pagina-productos-admin.component.html',
  styleUrl: './pagina-productos-admin.component.css'
})
export class PaginaProductosAdminComponent {

}
