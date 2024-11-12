import { Component } from '@angular/core';
import { EliminarEtiquetaAdminComponent } from 'app/etiqueta/components/eliminar-etiqueta-admin/eliminar-etiqueta-admin.component';
import { EliminarCategoriaAdminComponent } from "../../../categoria/components/eliminar-categoria-admin/eliminar-categoria-admin.component";
import { NavbarDefaultAdminComponent } from "../../../nav/components/navbar-default-admin/navbar-default-admin.component";

@Component({
  selector: 'app-pagina-eliminar-etiqueta-admin',
  standalone: true,
  imports: [EliminarEtiquetaAdminComponent, NavbarDefaultAdminComponent],
  templateUrl: './pagina-eliminar-etiqueta-admin.component.html',
  styleUrl: './pagina-eliminar-etiqueta-admin.component.css'
})
export class PaginaEliminarEtiquetaAdminComponent {

}
