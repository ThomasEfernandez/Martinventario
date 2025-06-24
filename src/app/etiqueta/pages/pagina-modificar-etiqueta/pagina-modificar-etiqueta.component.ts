import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { ModificarEtiquetaComponent } from '../../components/modificar-etiqueta/modificar-etiqueta.component';

@Component({
  selector: 'app-pagina-modificar-etiqueta',
  standalone: true,
  imports: [NavbarComponent, ModificarEtiquetaComponent],
  templateUrl: './pagina-modificar-etiqueta.component.html',
  styleUrl: './pagina-modificar-etiqueta.component.css',
})
export class PaginaModificarEtiquetaComponent {
  user = history.state.user;
}
