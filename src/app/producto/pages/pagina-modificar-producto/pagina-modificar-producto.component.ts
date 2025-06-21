import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { ModificarProductoComponent } from '../../components/modificar-producto/modificar-producto.component';

@Component({
  selector: 'app-pagina-modificar-producto',
  standalone: true,
  imports: [NavbarAdminComponent, ModificarProductoComponent],
  templateUrl: './pagina-modificar-producto.component.html',
  styleUrl: './pagina-modificar-producto.component.css',
})
export class PaginaModificarProductoComponent {
  user = history.state.user;
}
