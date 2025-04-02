import { Component } from '@angular/core';
import { NavbarRepositorComponent } from '../../../nav/components/navbar-repositor/navbar-repositor.component';
import { MenuCategoriaComponent } from '../../../categoria/components/menu-categoria/menu-categoria.component';
import { ListarCategoriasComponent } from 'app/categoria/components/listar-categorias/listar-categorias.component';

@Component({
    selector: 'app-pagina-categorias-repositor',
    imports: [
        NavbarRepositorComponent,
        MenuCategoriaComponent,
        ListarCategoriasComponent,
    ],
    templateUrl: './pagina-categorias-repositor.component.html',
    styleUrl: './pagina-categorias-repositor.component.css'
})
export class PaginaCategoriasRepositorComponent {
  tipo: string = 'repositor';
}
