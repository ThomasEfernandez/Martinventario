import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { RealizarVentaComponent } from 'app/venta/components/realizar-venta/realizar-venta.component';

@Component({
  selector: 'app-pagina-realizar-venta-admin',
  standalone: true,
  imports: [NavbarAdminComponent, RealizarVentaComponent],
  templateUrl: './pagina-realizar-venta-admin.component.html',
  styleUrl: './pagina-realizar-venta-admin.component.css',
})
export class PaginaRealizarVentaAdminComponent {
  tipo: string = 'admin';
}
