import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { ModificarCategoriaComponent } from '../../../categoria/components/modificar-categoria/modificar-categoria.component';

@Component({
  selector: 'app-pagina-modificar-categoria',
  standalone: true,
  imports: [NavbarComponent, ModificarCategoriaComponent],
  templateUrl: './pagina-modificar-categoria.component.html',
  styleUrl: './pagina-modificar-categoria.component.css',
})
export class PaginaModificarCategoriaComponent {
  user = history.state.user;
}
