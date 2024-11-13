import { Component } from '@angular/core';
import { EliminarCategoriaAdminComponent } from '../../../categoria/components/eliminar-categoria-admin/eliminar-categoria-admin.component';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { NavbarDefaultAdminComponent } from '../../../nav/components/navbar-default-admin/navbar-default-admin.component';

@Component({
  selector: 'app-pagina-eliminar-categoria-admin',
  standalone: true,
  imports: [EliminarCategoriaAdminComponent, NavbarDefaultAdminComponent],
  templateUrl: './pagina-eliminar-categoria-admin.component.html',
  styleUrl: './pagina-eliminar-categoria-admin.component.css',
})
export class PaginaEliminarCategoriaAdminComponent {}
