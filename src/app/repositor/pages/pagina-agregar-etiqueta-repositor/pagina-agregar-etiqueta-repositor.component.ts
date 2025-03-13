import { Component } from '@angular/core';
import { NavbarRepositorComponent } from 'app/nav/components/navbar-repositor/navbar-repositor.component';
import { AgregarEtiquetaComponent } from '../../../etiqueta/components/agregar-etiqueta/agregar-etiqueta.component';

@Component({
    selector: 'app-pagina-agregar-etiqueta-repositor',
    imports: [NavbarRepositorComponent, AgregarEtiquetaComponent],
    templateUrl: './pagina-agregar-etiqueta-repositor.component.html',
    styleUrl: './pagina-agregar-etiqueta-repositor.component.css'
})
export class PaginaAgregarEtiquetaRepositorComponent {
  tipo: string = 'repositor';
}
