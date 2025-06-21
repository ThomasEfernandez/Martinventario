import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { EditarProductoComponent } from '../../components/modificar-producto/modificar-producto.component';

@Component({
  selector: 'app-pagina-modificar-producto-admin',
  standalone: true,
  imports: [NavbarAdminComponent, EditarProductoComponent],
  templateUrl: './pagina-modificar-producto-admin.component.html',
  styleUrl: './pagina-modificar-producto-admin.component.css',
})
export class PaginaModificarProductoAdminComponent {
  tipo: string = 'admin';
}
