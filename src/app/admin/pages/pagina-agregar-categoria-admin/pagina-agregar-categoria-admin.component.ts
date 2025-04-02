import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { AgregarCategoriaComponent } from '../../../categoria/components/agregar-categoria/agregar-categoria.component';

@Component({
  selector: 'app-pagina-agregar-categoria-admin',
  standalone: true,
  imports: [NavbarAdminComponent, AgregarCategoriaComponent],
  templateUrl: './pagina-agregar-categoria-admin.component.html',
  styleUrl: './pagina-agregar-categoria-admin.component.css',
})
export class PaginaAgregarCategoriaAdminComponent {
  tipo: string = 'admin';
}
