import { Component } from '@angular/core';
import { NavbarCategoriasAdminComponent } from '../../../nav/components/navbar-categorias-admin/navbar-categorias-admin.component';
import { ListarCategoriasComponent } from '../../../categoria/components/listar-categorias/listar-categorias.component';

@Component({
  selector: 'app-pagina-categorias-admin',
  standalone: true,
  imports: [NavbarCategoriasAdminComponent, ListarCategoriasComponent],
  templateUrl: './pagina-categorias-admin.component.html',
  styleUrl: './pagina-categorias-admin.component.css',
})
export class PaginaCategoriasAdminComponent {}
