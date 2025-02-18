import { Component } from '@angular/core';
import { VerDetalleCategoriaComponent } from 'app/categoria/components/ver-detalle-categoria/ver-detalle-categoria.component';
import { MenuEtiquetaComponent } from 'app/etiqueta/components/menu-etiqueta/menu-etiqueta.component';
import { NavbarEntradaComponent } from 'app/nav/components/navbar-entrada/navbar-entrada.component';

@Component({
  selector: 'app-pagina-ver-detalle-categoria-repositor',
  standalone: true,
  imports: [
    NavbarEntradaComponent,
    VerDetalleCategoriaComponent,
    MenuEtiquetaComponent,
  ],
  templateUrl: './pagina-ver-detalle-categoria-entradas.component.html',
  styleUrl: './pagina-ver-detalle-categoria-entradas.component.css',
})
export class PaginaVerDetalleCategoriaRepositorComponent {
  tipo: string = 'repositor';
}
