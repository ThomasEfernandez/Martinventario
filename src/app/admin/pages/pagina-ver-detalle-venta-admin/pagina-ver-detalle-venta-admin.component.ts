import { Component } from '@angular/core';
import { NavbarAdminComponent } from 'app/nav/components/navbar-admin/navbar-admin.component';
import { VerDetalleVentaComponent } from 'app/egreso/components/ver-detalle-venta/ver-detalle-venta.component';

@Component({
    selector: 'app-pagina-ver-detalle-venta-admin',
    imports: [NavbarAdminComponent, VerDetalleVentaComponent],
    templateUrl: './pagina-ver-detalle-venta-admin.component.html',
    styleUrl: './pagina-ver-detalle-venta-admin.component.css'
})
export class PaginaVerDetalleVentaAdminComponent {}
