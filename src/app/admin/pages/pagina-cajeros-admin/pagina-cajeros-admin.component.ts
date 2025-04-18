import { Component } from '@angular/core';
import { ListarCajerosComponent } from '../../../cajero/components/listar-cajeros/listar-cajeros.component';
import { MenuCajeroComponent } from '../../../cajero/components/menu-cajero/menu-cajero.component';
import { NavbarAdminComponent } from 'app/nav/components/navbar-admin/navbar-admin.component';


@Component({
  selector: 'app-pagina-cajeros-admin',
  standalone: true,
  imports: [NavbarAdminComponent, MenuCajeroComponent, ListarCajerosComponent],
  templateUrl: './pagina-cajeros-admin.component.html',
  styleUrl: './pagina-cajeros-admin.component.css',
})
export class PaginaCajerosAdminComponent {
  tipo: string = 'admin';
}
