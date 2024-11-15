import { Component } from '@angular/core';
import { ListarComprasComponent } from 'app/compra/components/listar-compras/listar-compras.component';
import { MenuCompraComponent } from 'app/compra/components/menu-compra/menu-compra.component';
import { NavbarAdminComponent } from 'app/nav/components/navbar-admin/navbar-admin.component';

@Component({
  selector: 'app-pagina-compras-admin',
  standalone: true,
  imports: [NavbarAdminComponent, MenuCompraComponent, ListarComprasComponent],
  templateUrl: './pagina-compras-admin.component.html',
  styleUrl: './pagina-compras-admin.component.css',
})
export class PaginaComprasAdminComponent {
  tipo: string = 'admin';
}
