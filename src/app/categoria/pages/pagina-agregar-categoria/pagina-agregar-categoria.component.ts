import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { AgregarCategoriaComponent } from '../../../categoria/components/agregar-categoria/agregar-categoria.component';

@Component({
  selector: 'app-pagina-agregar-categoria',
  standalone: true,
  imports: [NavbarAdminComponent, AgregarCategoriaComponent],
  templateUrl: './pagina-agregar-categoria.component.html',
  styleUrl: './pagina-agregar-categoria.component.css',
})
export class PaginaAgregarCategoriaComponent {
  user = history.state.user;
}
