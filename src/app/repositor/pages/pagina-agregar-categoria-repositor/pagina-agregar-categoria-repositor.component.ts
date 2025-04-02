import { Component } from '@angular/core';
import { NavbarRepositorComponent } from '../../../nav/components/navbar-repositor/navbar-repositor.component';
import { AgregarCategoriaComponent } from '../../../categoria/components/agregar-categoria/agregar-categoria.component';

@Component({
    selector: 'app-pagina-agregar-categoria-repositor',
    imports: [NavbarRepositorComponent, AgregarCategoriaComponent],
    templateUrl: './pagina-agregar-categoria-repositor.component.html',
    styleUrl: './pagina-agregar-categoria-repositor.component.css'
})
export class PaginaAgregarCategoriaRepositorComponent {
  tipo: string = 'repositor';
}
