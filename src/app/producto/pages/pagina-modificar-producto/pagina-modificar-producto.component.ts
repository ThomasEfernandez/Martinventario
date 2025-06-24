import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { ModificarProductoComponent } from '../../components/modificar-producto/modificar-producto.component';

@Component({
  selector: 'app-pagina-modificar-producto',
  standalone: true,
  imports: [NavbarComponent, ModificarProductoComponent],
  templateUrl: './pagina-modificar-producto.component.html',
  styleUrl: './pagina-modificar-producto.component.css',
})
export class PaginaModificarProductoComponent {
  user = history.state.user;
}
