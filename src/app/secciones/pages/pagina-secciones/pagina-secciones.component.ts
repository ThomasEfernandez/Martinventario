import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { MenuSeccionesComponent } from 'app/secciones/components/menu-secciones/menu-secciones.component';

@Component({
  selector: 'app-pagina-secciones',
  standalone: true,
  imports: [NavbarComponent, MenuSeccionesComponent, RouterModule],
  templateUrl: './pagina-secciones.component.html',
  styleUrl: './pagina-secciones.component.css',
})
export class PaginaSeccionesComponent {
  user = history.state.user;

  ngOnInit() {
    console.log("PAGINA SECCIONES", this.user)
  }
}
