import { Component } from '@angular/core';
import { NavbarDefaultAdminComponent } from '../../../nav/components/navbar-default-admin/navbar-default-admin.component';
import { AgregarEtiquetaAdminComponent } from '../../../etiqueta/components/agregar-etiqueta-admin/agregar-etiqueta-admin.component';

@Component({
  selector: 'app-pagina-agregar-etiqueta-admin',
  standalone: true,
  imports: [NavbarDefaultAdminComponent, AgregarEtiquetaAdminComponent],
  templateUrl: './pagina-agregar-etiqueta-admin.component.html',
  styleUrl: './pagina-agregar-etiqueta-admin.component.css',
})
export class PaginaAgregarEtiquetaAdminComponent {}
