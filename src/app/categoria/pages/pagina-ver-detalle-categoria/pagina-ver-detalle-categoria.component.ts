import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { VerDetalleCategoriaComponent } from '../../../categoria/components/ver-detalle-categoria/ver-detalle-categoria.component';

@Component({
  selector: 'app-pagina-ver-detalle-categoria',
  standalone: true,
  imports: [NavbarAdminComponent, VerDetalleCategoriaComponent],
  templateUrl: './pagina-ver-detalle-categoria.component.html',
  styleUrl: './pagina-ver-detalle-categoria.component.css',
})
export class PaginaVerDetalleCategoriaComponent {
  user = history.state.user;
  categoria = history.state.categoria;
}
