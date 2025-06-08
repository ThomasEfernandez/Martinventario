import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuSeccionesBaseComponent } from 'app/base/compomenents/menu-secciones-base/menu-secciones-base.component';
import { NavbarBaseComponent } from 'app/nav/components/navbar-base/navbar-base.component';

@Component({
  selector: 'app-pagina-secciones-base',
  imports: [NavbarBaseComponent, MenuSeccionesBaseComponent, RouterModule],
  templateUrl: './pagina-secciones-base.component.html',
  styleUrl: './pagina-secciones-base.component.css',
})
export class PaginaSeccionesBaseComponent {}
