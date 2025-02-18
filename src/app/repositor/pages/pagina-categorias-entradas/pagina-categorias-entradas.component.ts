import { Component } from '@angular/core';
import { NavbarEntradaComponent } from '../../../nav/components/navbar-entrada/navbar-entrada.component';
import { MenuCategoriaComponent } from '../../../categoria/components/menu-categoria/menu-categoria.component';
import { ListarCategoriasComponent } from 'app/categoria/components/listar-categorias/listar-categorias.component';

@Component({
  selector: 'app-pagina-categorias-repositor',
  standalone: true,
  imports: [
    NavbarEntradaComponent,
    MenuCategoriaComponent,
    ListarCategoriasComponent,
  ],
  templateUrl: './pagina-categorias-entradas.component.html',
  styleUrl: './pagina-categorias-entradas.component.css',
})
export class PaginaCategoriasRepositorComponent {
  tipo: string = 'repositor';
}
