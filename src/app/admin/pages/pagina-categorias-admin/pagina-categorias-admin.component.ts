import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { MenuCategoriaComponent } from '../../../categoria/components/menu-categoria/menu-categoria.component';
import { ListarCategoriasComponent } from '../../../categoria/components/listar-categorias/listar-categorias.component';

@Component({
  selector: 'app-pagina-categorias-admin',
  standalone: true,
  imports: [
    NavbarAdminComponent,
    ListarCategoriasComponent,
    MenuCategoriaComponent,
  ],
  templateUrl: './pagina-categorias-admin.component.html',
  styleUrl: './pagina-categorias-admin.component.css',
})
export class PaginaCategoriasAdminComponent {}
