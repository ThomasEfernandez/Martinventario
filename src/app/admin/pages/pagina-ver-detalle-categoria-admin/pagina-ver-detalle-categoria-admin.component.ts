import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { VerDetalleCategoriaComponent } from '../../../categoria/components/ver-detalle-categoria/ver-detalle-categoria.component';

@Component({
  selector: 'app-pagina-ver-detalle-categoria-admin',
  standalone: true,
  imports: [NavbarAdminComponent, VerDetalleCategoriaComponent],
  templateUrl: './pagina-ver-detalle-categoria-admin.component.html',
  styleUrl: './pagina-ver-detalle-categoria-admin.component.css',
})
export class PaginaVerDetalleCategoriaAdminComponent {}
