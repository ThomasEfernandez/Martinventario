import { VerDetalleEgresoComponent } from './../../../egreso/components/ver-detalle-egreso/ver-detalle-egreso.component';
import { Component } from '@angular/core';
import { NavbarComponent } from 'app/nav/components/navbar/navbar.component';


@Component({
  selector: 'app-pagina-ver-detalle-egreso-admin',
  standalone: true,
  imports: [NavbarComponent, VerDetalleEgresoComponent],
  templateUrl: './pagina-ver-detalle-egreso-admin.component.html',
  styleUrl: './pagina-ver-detalle-egreso-admin.component.css',
})
export class PaginaVerDetalleEgresoAdminComponent { }
