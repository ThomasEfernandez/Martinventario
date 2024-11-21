import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { ListarEstadisticaComponent } from 'app/estadistica/components/listar-estadistica/listar-estadistica.component';
import { fetchProducts } from '../../../api/api';

@Component({
  selector: 'app-pagina-principal-admin',
  standalone: true,
  imports: [NavbarAdminComponent, ListarEstadisticaComponent],
  templateUrl: './pagina-principal-admin.component.html',
  styleUrl: './pagina-principal-admin.component.css',
})
export class PaginaPrincipalAdminComponent {}
