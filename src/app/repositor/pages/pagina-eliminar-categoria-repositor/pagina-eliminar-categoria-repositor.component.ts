import { Component } from '@angular/core';
import { EliminarCategoriaRepositorComponent } from '../../../categoria/components/eliminar-categoria-repositor/eliminar-categoria-repositor.component';
import { NavbarDefaultAdminComponent } from "../../../nav/components/navbar-default-admin/navbar-default-admin.component";
import { NavbarDefaultRepositorComponent } from "../../../nav/components/navbar-default-repositor/navbar-default-repositor.component";

@Component({
  selector: 'app-pagina-eliminar-categoria-repositor',
  standalone: true,
  imports: [EliminarCategoriaRepositorComponent, NavbarDefaultAdminComponent, NavbarDefaultRepositorComponent],
  templateUrl: './pagina-eliminar-categoria-repositor.component.html',
  styleUrl: './pagina-eliminar-categoria-repositor.component.css',
})
export class PaginaEliminarCategoriaRepositorComponent {}
