import { Component } from '@angular/core';
import { NavbarDefaultComponent } from '../../../nav/components/navbar-default/navbar-default.component';
import { IniciarSesionComponent } from '../../components/iniciar-sesion/iniciar-sesion.component';
import { CargarDatosComponent } from '../../../api/cargar-datos/cargar-datos.component';

@Component({
  selector: 'app-pagina-iniciar-sesion',
  standalone: true,
  imports: [
    NavbarDefaultComponent,
    IniciarSesionComponent,
    CargarDatosComponent,
  ],
  templateUrl: './pagina-iniciar-sesion.component.html',
  styleUrl: './pagina-iniciar-sesion.component.css',
})
export class PaginaIniciarSesionComponent {}
