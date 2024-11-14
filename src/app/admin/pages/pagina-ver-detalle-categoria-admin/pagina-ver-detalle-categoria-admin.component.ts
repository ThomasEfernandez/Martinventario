import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { VerDetalleComponent } from '../../../ver-detalles/ver-detalle/ver-detalle.component';

@Component({
  selector: 'app-pagina-ver-detalle-categoria-admin',
  standalone: true,
  imports: [NavbarAdminComponent, VerDetalleComponent],
  templateUrl: './pagina-ver-detalle-categoria-admin.component.html',
  styleUrl: './pagina-ver-detalle-categoria-admin.component.css',
})
export class PaginaVerDetalleCategoriaAdminComponent {}
