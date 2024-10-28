import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { NavbarVistaAdminComponent } from '../../../nav/components/navbar-admin/navbar-vista-admin/navbar-vista-admin.component';

@Component({
  selector: 'app-pagina-principal-admin',
  standalone: true,
  imports: [NavbarComponent, NavbarVistaAdminComponent],
  templateUrl: './pagina-principal-admin.component.html',
  styleUrl: './pagina-principal-admin.component.css',
})
export class PaginaPrincipalAdminComponent {}
