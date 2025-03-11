import { Component } from '@angular/core';
import { VerDetalleCategoriaComponent } from 'app/categoria/components/ver-detalle-categoria/ver-detalle-categoria.component';
import { NavbarEntradaComponent } from 'app/nav/components/navbar-entrada/navbar-entrada.component';


@Component({
  selector: 'app-pagina-ver-detalle-categoria-repositor',
  standalone: true,
  imports: [NavbarEntradaComponent, VerDetalleCategoriaComponent],
  templateUrl: './pagina-ver-detalle-categoria-entradas.component.html',
  styleUrl: './pagina-ver-detalle-categoria-entradas.component.css',
})
export class PaginaVerDetalleCategoriaRepositorComponent {
  tipo: string = 'repositor';
}
