import { Component } from '@angular/core';
import { NavbarAdminComponent } from "../../../nav/components/navbar-admin/navbar-admin.component";
import { EditarEtiquetaComponent } from "../../../etiqueta/components/editar-etiqueta/editar-etiqueta.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pagina-editar-etiqueta',
  standalone: true,
  imports: [NavbarAdminComponent, EditarEtiquetaComponent,RouterModule],
  templateUrl: './pagina-editar-etiqueta.component.html',
  styleUrl: './pagina-editar-etiqueta.component.css'
})
export class PaginaEditarEtiquetaComponent {

}
