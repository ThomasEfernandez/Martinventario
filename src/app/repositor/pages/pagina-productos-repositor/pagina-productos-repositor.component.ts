import { Component } from '@angular/core';
import { NavbarProductosRepositorComponent } from '../../../nav/components/navbar-productos-repositor/navbar-productos-repositor.component';
import { ListarProductosComponent } from '../../../producto/components/listar-productos/listar-productos.component';

@Component({
  selector: 'app-pagina-productos-repositor',
  standalone: true,
  imports: [NavbarProductosRepositorComponent, ListarProductosComponent],
  templateUrl: './pagina-productos-repositor.component.html',
  styleUrl: './pagina-productos-repositor.component.css',
})
export class PaginaProductosRepositorComponent {}
