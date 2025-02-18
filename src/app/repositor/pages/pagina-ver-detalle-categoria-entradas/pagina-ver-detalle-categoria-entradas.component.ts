import { Component } from '@angular/core';
import { VerDetalleCategoriaComponent } from 'app/categoria/components/ver-detalle-categoria/ver-detalle-categoria.component';
<<<<<<< HEAD:src/app/repositor/pages/pagina-ver-detalle-categoria-entradas/pagina-ver-detalle-categoria-entradas.component.ts
import { MenuEtiquetaComponent } from 'app/etiqueta/components/menu-etiqueta/menu-etiqueta.component';
import { NavbarEntradaComponent } from 'app/nav/components/navbar-entrada/navbar-entrada.component';
=======
import { NavbarRepositorComponent } from 'app/nav/components/navbar-repositor/navbar-repositor.component';
>>>>>>> 9e242d468695fbea881c19897740701f2a0224bf:src/app/repositor/pages/pagina-ver-detalle-categoria-repositor/pagina-ver-detalle-categoria-repositor.component.ts

@Component({
  selector: 'app-pagina-ver-detalle-categoria-repositor',
  standalone: true,
<<<<<<< HEAD:src/app/repositor/pages/pagina-ver-detalle-categoria-entradas/pagina-ver-detalle-categoria-entradas.component.ts
  imports: [
    NavbarEntradaComponent,
    VerDetalleCategoriaComponent,
    MenuEtiquetaComponent,
  ],
  templateUrl: './pagina-ver-detalle-categoria-entradas.component.html',
  styleUrl: './pagina-ver-detalle-categoria-entradas.component.css',
=======
  imports: [NavbarRepositorComponent, VerDetalleCategoriaComponent],
  templateUrl: './pagina-ver-detalle-categoria-repositor.component.html',
  styleUrl: './pagina-ver-detalle-categoria-repositor.component.css',
>>>>>>> 9e242d468695fbea881c19897740701f2a0224bf:src/app/repositor/pages/pagina-ver-detalle-categoria-repositor/pagina-ver-detalle-categoria-repositor.component.ts
})
export class PaginaVerDetalleCategoriaRepositorComponent {
  tipo: string = 'repositor';
}
