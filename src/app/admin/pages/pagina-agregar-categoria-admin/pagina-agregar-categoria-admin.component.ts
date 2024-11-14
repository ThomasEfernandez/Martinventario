import { Component } from '@angular/core';
import { NavbarDefaultAdminComponent } from '../../../nav/components/navbar-default-admin/navbar-default-admin.component';
import { AgregarCategoriaAdminComponent } from '../../../categoria/components/agregar-categoria-admin/agregar-categoria-admin.component';

@Component({
  selector: 'app-pagina-agregar-categoria-admin',
  standalone: true,
  imports: [NavbarDefaultAdminComponent, AgregarCategoriaAdminComponent],
  templateUrl: './pagina-agregar-categoria-admin.component.html',
  styleUrl: './pagina-agregar-categoria-admin.component.css',
})
export class PaginaAgregarCategoriaAdminComponent {}
