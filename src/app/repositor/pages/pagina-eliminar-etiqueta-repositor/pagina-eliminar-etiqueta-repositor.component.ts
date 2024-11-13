import { Component } from '@angular/core';
import { EliminarEtiquetaRepositorComponent } from 'app/etiqueta/components/eliminar-etiqueta-repositor/eliminar-etiqueta-repositor.component';
import { NavbarProductosAdminComponent } from "../../../nav/components/navbar-productos-admin/navbar-productos-admin.component";
import { NavbarProductosRepositorComponent } from "../../../nav/components/navbar-productos-repositor/navbar-productos-repositor.component";

@Component({
  selector: 'app-pagina-eliminar-etiqueta-repositor',
  standalone: true,
  imports: [EliminarEtiquetaRepositorComponent, NavbarProductosAdminComponent, NavbarProductosRepositorComponent],
  templateUrl: './pagina-eliminar-etiqueta-repositor.component.html',
  styleUrl: './pagina-eliminar-etiqueta-repositor.component.css'
})
export class PaginaEliminarEtiquetaRepositorComponent {

}
