import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { MenuCategoriaComponent } from '../../../categoria/components/menu-categoria/menu-categoria.component';
import { ListarCategoriasComponent } from '../../../categoria/components/listar-categorias/listar-categorias.component';

@Component({
  selector: 'app-pagina-categorias',
  standalone: true,
  imports: [NavbarComponent, ListarCategoriasComponent, MenuCategoriaComponent,],
  templateUrl: './pagina-categorias.component.html',
  styleUrl: './pagina-categorias.component.css',
})
export class PaginaCategoriasComponent {
  user = history.state.user;
}
