import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { AgregarCategoriaAdminComponent } from '../../../categoria/components/agregar-categoria-admin/agregar-categoria-admin.component';

@Component({
  selector: 'app-pagina-agregar-categoria-admin',
  standalone: true,
  imports: [NavbarAdminComponent, AgregarCategoriaAdminComponent],
  templateUrl: './pagina-agregar-categoria-admin.component.html',
  styleUrl: './pagina-agregar-categoria-admin.component.css',
})
export class PaginaAgregarCategoriaAdminComponent {}
