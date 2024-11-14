import { Component } from '@angular/core';
import { NavbarDefaultAdminComponent } from '../../../nav/components/navbar-default-admin/navbar-default-admin.component';
import { AgregarCategoriaComponent } from '../../../categoria/components/agregar-categoria/agregar-categoria.component';

@Component({
  selector: 'app-pagina-agregar-categoria-admin',
  standalone: true,
  imports: [NavbarDefaultAdminComponent, AgregarCategoriaComponent],
  templateUrl: './pagina-agregar-categoria-admin.component.html',
  styleUrl: './pagina-agregar-categoria-admin.component.css',
})
export class PaginaAgregarCategoriaAdminComponent {}
