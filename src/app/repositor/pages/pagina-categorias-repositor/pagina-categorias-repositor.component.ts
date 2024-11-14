import { Component } from '@angular/core';
import { NavbarRepositorComponent } from '../../../nav/components/navbar-repositor/navbar-repositor.component';
import { MenuCategoriaRepositorComponent } from '../../../categoria/components/menu-categoria-repositor/menu-categoria-repositor.component';
import { ListarCategoriasComponent } from 'app/categoria/components/listar-categorias/listar-categorias.component';

@Component({
  selector: 'app-pagina-categorias-repositor',
  standalone: true,
  imports: [
    NavbarRepositorComponent,
    MenuCategoriaRepositorComponent,
    ListarCategoriasComponent,
  ],
  templateUrl: './pagina-categorias-repositor.component.html',
  styleUrl: './pagina-categorias-repositor.component.css',
})
export class PaginaCategoriasRepositorComponent {
  tipo: string = 'repositor';
}
