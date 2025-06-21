import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { AgregarProductoComponent } from 'app/producto/components/agregar-producto/agregar-producto.component';

@Component({
  selector: 'app-pagina-agregar-producto',
  standalone: true,
  imports: [NavbarAdminComponent, AgregarProductoComponent],
  templateUrl: './pagina-agregar-producto.component.html',
  styleUrl: './pagina-agregar-producto.component.css',
})
export class PaginaAgregarProductoComponent {
  user = history.state.user;
}
