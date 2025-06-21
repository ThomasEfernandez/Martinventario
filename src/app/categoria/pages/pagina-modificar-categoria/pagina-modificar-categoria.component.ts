import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { ModificarCategoriaComponent } from '../../../categoria/components/modificar-categoria/modificar-categoria.component';

@Component({
  selector: 'app-pagina-modificar-categoria',
  standalone: true,
  imports: [NavbarAdminComponent, ModificarCategoriaComponent],
  templateUrl: './pagina-modificar-categoria.component.html',
  styleUrl: './pagina-modificar-categoria.component.css',
})
export class PaginaModificarCategoriaComponent {
  user = history.state.user;
}
