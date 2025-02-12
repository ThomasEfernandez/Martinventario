import { Component } from '@angular/core';
import { ListarCajerosComponent } from '../../../cajero/components/listar-cajeros(ELIMINAR)/listar-cajeros.component';
import { MenuCajeroComponent } from '../../../cajero/components/menu-salida/menu-cajero.component';
import { NavbarAdminComponent } from 'app/nav/components/navbar-admin/navbar-admin.component';
import { PaginaVentasAdminComponent } from '../pagina-egresos-admin/pagina-ventas-admin.component';
import { ListarVentasComponent } from 'app/venta/components/listar-egreso/listar-ventas.component';

@Component({
  selector: 'app-pagina-cajeros-admin',
  standalone: true,
  imports: [
    NavbarAdminComponent,
    MenuCajeroComponent,
    ListarCajerosComponent,
    ListarVentasComponent,
  ],
  templateUrl: './pagina-cajeros-admin.component.html',
  styleUrl: './pagina-cajeros-admin.component.css',
})
export class PaginaCajerosAdminComponent {}
