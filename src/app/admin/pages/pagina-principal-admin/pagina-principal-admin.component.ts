import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';

@Component({
  selector: 'app-pagina-principal-admin',
  standalone: true,
  imports: [NavbarAdminComponent],
  templateUrl: './pagina-principal-admin.component.html',
  styleUrl: './pagina-principal-admin.component.css',
})
export class PaginaPrincipalAdminComponent {}
