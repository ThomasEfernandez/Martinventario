import { Component } from '@angular/core';
import { ListarCategoriasComponent } from '../../components/listar-categorias/listar-categorias.component';
import { NavbarCategoriaComponent } from '../../../nav/components/navbar-categorias/navbar-categoria.component';
import { VolverAProductoComponent } from "../../../producto/components/volver-a-producto/volver-a-producto.component";

@Component({
  selector: 'app-pagina-categoria',
  standalone: true,
  imports: [ListarCategoriasComponent, NavbarCategoriaComponent, VolverAProductoComponent],
  templateUrl: './pagina-categorias.component.html',
  styleUrl: './pagina-categorias.component.css',
})
export class PaginaCategoriasComponent {}
