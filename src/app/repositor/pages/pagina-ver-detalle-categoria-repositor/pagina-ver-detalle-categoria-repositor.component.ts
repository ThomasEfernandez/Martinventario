import { Component } from '@angular/core';
import { VerDetalleCategoriaComponent } from 'app/categoria/components/ver-detalle-categoria/ver-detalle-categoria.component';
import { MenuEtiquetaComponent } from 'app/etiqueta/components/menu-etiqueta/menu-etiqueta.component';
import { NavbarRepositorComponent } from 'app/nav/components/navbar-repositor/navbar-repositor.component';

@Component({
  selector: 'app-pagina-ver-detalle-categoria-repositor',
  standalone: true,
  imports: [
    NavbarRepositorComponent,
    VerDetalleCategoriaComponent,
    MenuEtiquetaComponent,
  ],
  templateUrl: './pagina-ver-detalle-categoria-repositor.component.html',
  styleUrl: './pagina-ver-detalle-categoria-repositor.component.css',
})
export class PaginaVerDetalleCategoriaRepositorComponent {
  tipo: string = 'repositor';
}
