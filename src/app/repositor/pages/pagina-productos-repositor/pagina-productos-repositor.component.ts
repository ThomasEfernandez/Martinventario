import { Component } from '@angular/core';
import { NavbarRepositorComponent } from '../../../nav/components/navbar-repositor/navbar-repositor.component';
import { MenuProductoRepositorComponent } from '../../../producto/components/menu-producto-repositor/menu-producto-repositor.component';
import { ListarProductosComponent } from '../../../producto/components/listar-productos/listar-productos.component';

@Component({
  selector: 'app-pagina-productos-repositor',
  standalone: true,
  imports: [
    NavbarRepositorComponent,
    MenuProductoRepositorComponent,
    ListarProductosComponent,
  ],
  templateUrl: './pagina-productos-repositor.component.html',
  styleUrl: './pagina-productos-repositor.component.css',
})
export class PaginaProductosRepositorComponent {}
