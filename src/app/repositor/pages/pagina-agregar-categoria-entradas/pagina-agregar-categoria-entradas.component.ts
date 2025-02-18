import { Component } from '@angular/core';
import { NavbarEntradaComponent } from '../../../nav/components/navbar-entrada/navbar-entrada.component';
import { AgregarCategoriaComponent } from '../../../categoria/components/agregar-categoria/agregar-categoria.component';

@Component({
  selector: 'app-pagina-agregar-categoria-entradas',
  standalone: true,
  imports: [NavbarEntradaComponent, AgregarCategoriaComponent],
  templateUrl: './pagina-agregar-categoria-entradas.component.html',
  styleUrl: './pagina-agregar-categoria-entradas.component.css',
})
export class PaginaAgregarCategoriaEntradaComponent {
  tipo: string = 'repositor';
}
