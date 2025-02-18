import { Component } from '@angular/core';
import { NavbarEntradaComponent} from 'app/nav/components/navbar-entrada/navbar-entrada.component';
import { AgregarEtiquetaComponent } from '../../../etiqueta/components/agregar-etiqueta/agregar-etiqueta.component';

@Component({
  selector: 'app-pagina-agregar-etiqueta-entradas',
  standalone: true,
  imports: [NavbarEntradaComponent, AgregarEtiquetaComponent],
  templateUrl: './pagina-agregar-etiqueta-entradas.component.html',
  styleUrl: './pagina-agregar-etiqueta-entradas.component.css',
})
export class PaginaAgregarEtiquetaEntradasComponent {
  tipo: string = 'repositor';
}
