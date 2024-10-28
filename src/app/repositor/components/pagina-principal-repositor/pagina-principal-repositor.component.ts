import { Component } from '@angular/core';
import { NavbarVistaAdminComponent } from '../../../nav/components/navbar-admin/navbar-vista-admin/navbar-vista-admin.component';
import { ListarProductosComponent } from '../../../producto/components/listar-productos/listar-productos.component';

@Component({
  selector: 'app-pagina-principal-repositor',
  standalone: true,
  imports: [NavbarVistaAdminComponent, ListarProductosComponent],
  templateUrl: './pagina-principal-repositor.component.html',
  styleUrl: './pagina-principal-repositor.component.css',
})
export class PaginaPrincipalRepositorComponent {}
