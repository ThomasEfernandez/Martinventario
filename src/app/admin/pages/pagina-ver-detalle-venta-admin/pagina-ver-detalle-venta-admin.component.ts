import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
=======
import { NavbarAdminComponent } from 'app/nav/components/navbar-admin/navbar-admin.component';
>>>>>>> bd591d24e5929defbd2144700f0d9dd6ba90a76d
import { VerDetalleVentaComponent } from 'app/venta/components/ver-detalle-venta/ver-detalle-venta.component';

@Component({
  selector: 'app-pagina-ver-detalle-venta-admin',
  standalone: true,
  imports: [NavbarAdminComponent, VerDetalleVentaComponent],
  templateUrl: './pagina-ver-detalle-venta-admin.component.html',
  styleUrl: './pagina-ver-detalle-venta-admin.component.css',
})
export class PaginaVerDetalleVentaAdminComponent {}
