import { Component } from '@angular/core';
import { NavbarBaseComponent } from 'app/nav/components/navbar-base/navbar-base.component';
import { ListarProductosComponent } from 'app/producto/components/listar-productos/listar-productos.component';

@Component({
  selector: 'app-pagina-principal-base',
  standalone: true,
  imports: [NavbarBaseComponent, ListarProductosComponent],
  templateUrl: './pagina-principal-base.component.html',
  styleUrl: './pagina-principal-base.component.css',
})
export class PaginaPrincipalBaseComponent {
  tipo: string = 'base';
}
