import { Component } from '@angular/core';
import { ListarProductosComponent } from '../../components/listar-productos/listar-productos.component';
import { NavbarProductosComponent } from '../../../nav/components/navbar-productos/navbar-productos.component';

@Component({
  selector: 'app-pagina-productos',
  standalone: true,
  imports: [ListarProductosComponent, NavbarProductosComponent],
  templateUrl: './pagina-productos.component.html',
  styleUrl: './pagina-productos.component.css',
})
export class PaginaProductosComponent {}
