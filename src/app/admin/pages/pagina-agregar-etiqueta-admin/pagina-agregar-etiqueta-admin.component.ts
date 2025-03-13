import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { AgregarEtiquetaComponent } from '../../../etiqueta/components/agregar-etiqueta/agregar-etiqueta.component';

@Component({
    selector: 'app-pagina-agregar-etiqueta-admin',
    imports: [NavbarAdminComponent, AgregarEtiquetaComponent],
    templateUrl: './pagina-agregar-etiqueta-admin.component.html',
    styleUrl: './pagina-agregar-etiqueta-admin.component.css'
})
export class PaginaAgregarEtiquetaAdminComponent {
  tipo: string = 'admin';
}
