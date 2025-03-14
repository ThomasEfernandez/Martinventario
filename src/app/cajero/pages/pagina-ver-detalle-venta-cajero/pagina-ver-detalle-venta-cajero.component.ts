import { Component } from '@angular/core';
import { NavbarCajeroComponent } from 'app/nav/components/navbar-cajero/navbar-cajero.component';
import { VerDetalleVentaComponent } from 'app/egreso/components/ver-detalle-venta/ver-detalle-venta.component';

@Component({
    selector: 'app-pagina-ver-detalle-venta-cajero',
    imports: [NavbarCajeroComponent, VerDetalleVentaComponent],
    templateUrl: './pagina-ver-detalle-venta-cajero.component.html',
    styleUrl: './pagina-ver-detalle-venta-cajero.component.css'
})
export class PaginaVerDetalleVentaCajeroComponent {}
