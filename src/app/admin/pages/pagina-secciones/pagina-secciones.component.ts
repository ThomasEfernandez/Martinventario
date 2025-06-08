import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { MenuSeccionesComponent } from '../../menu-secciones/menu-secciones.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pagina-secciones',
  standalone: true,
  imports: [NavbarAdminComponent, MenuSeccionesComponent, RouterModule],
  templateUrl: './pagina-secciones.component.html',
  styleUrl: './pagina-secciones.component.css',
})
export class PaginaSeccionesComponent {}
