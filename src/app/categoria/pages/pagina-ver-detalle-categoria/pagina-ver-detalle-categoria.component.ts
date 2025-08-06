import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { VerDetalleCategoriaComponent } from '../../../categoria/components/ver-detalle-categoria/ver-detalle-categoria.component';
import { MenuEtiquetaComponent } from "app/etiqueta/components/menu-etiqueta/menu-etiqueta.component";

@Component({
  selector: 'app-pagina-ver-detalle-categoria',
  standalone: true,
  imports: [NavbarComponent, VerDetalleCategoriaComponent, MenuEtiquetaComponent],
  templateUrl: './pagina-ver-detalle-categoria.component.html',
  styleUrl: './pagina-ver-detalle-categoria.component.css',
})
export class PaginaVerDetalleCategoriaComponent {
  user = history.state.user;
  categoria = history.state.categoria;

  ngOnInit() {
    console.log("PAGINA VER DETALLE CATEGORIA", this.user)
  }
}
