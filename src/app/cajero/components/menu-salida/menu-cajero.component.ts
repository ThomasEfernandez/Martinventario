import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RealizarVentaAdminComponent } from '../../../venta/components/realizar-egreso-admin/realizar-venta-admin.component';

@Component({
  selector: 'app-menu-cajero',
  standalone: true,
  imports: [RouterModule, RealizarVentaAdminComponent],
  templateUrl: './menu-cajero.component.html',
  styleUrl: './menu-cajero.component.css',
})
export class MenuCajeroComponent {}
