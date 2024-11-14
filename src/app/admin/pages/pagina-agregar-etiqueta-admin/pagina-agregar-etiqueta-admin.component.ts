import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { AgregarEtiquetaAdminComponent } from '../../../etiqueta/components/agregar-etiqueta-admin/agregar-etiqueta-admin.component';

@Component({
  selector: 'app-pagina-agregar-etiqueta-admin',
  standalone: true,
  imports: [NavbarAdminComponent, AgregarEtiquetaAdminComponent],
  templateUrl: './pagina-agregar-etiqueta-admin.component.html',
  styleUrl: './pagina-agregar-etiqueta-admin.component.css',
})
export class PaginaAgregarEtiquetaAdminComponent {}
