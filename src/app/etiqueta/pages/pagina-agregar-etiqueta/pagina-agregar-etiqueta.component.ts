import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { AgregarEtiquetaComponent } from '../../components/agregar-etiqueta/agregar-etiqueta.component';

@Component({
  selector: 'app-pagina-agregar-etiqueta',
  standalone: true,
  imports: [NavbarAdminComponent, AgregarEtiquetaComponent],
  templateUrl: './pagina-agregar-etiqueta.component.html',
  styleUrl: './pagina-agregar-etiqueta.component.css',
})
export class PaginaAgregarEtiquetaComponent {
  user = history.state.user;
}
