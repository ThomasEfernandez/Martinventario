import { Component } from '@angular/core';
import { NavbarCategoriasRepositorComponent } from '../../../nav/components/navbar-categorias-repositor/navbar-categorias-repositor.component';
import { ListarCategoriasComponent } from 'app/categoria/components/listar-categorias/listar-categorias.component';

@Component({
  selector: 'app-pagina-categorias-repositor',
  standalone: true,
  imports: [NavbarCategoriasRepositorComponent, ListarCategoriasComponent],
  templateUrl: './pagina-categorias-repositor.component.html',
  styleUrl: './pagina-categorias-repositor.component.css',
})
export class PaginaCategoriasRepositorComponent {}
