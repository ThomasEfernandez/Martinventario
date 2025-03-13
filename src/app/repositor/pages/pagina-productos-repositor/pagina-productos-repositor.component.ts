import { Component } from '@angular/core';
import { NavbarRepositorComponent } from '../../../nav/components/navbar-repositor/navbar-repositor.component';
import { MenuProductoComponent } from '../../../producto/components/menu-producto/menu-producto.component';
import { ListarProductosComponent } from '../../../producto/components/listar-productos/listar-productos.component';

@Component({
    selector: 'app-pagina-productos-repositor',
    imports: [
        NavbarRepositorComponent,
        MenuProductoComponent,
        ListarProductosComponent,
    ],
    templateUrl: './pagina-productos-repositor.component.html',
    styleUrl: './pagina-productos-repositor.component.css'
})
export class PaginaProductosRepositorComponent {
  tipo: string = 'repositor';
}
