import { Component } from '@angular/core';
import { NavbarDefaultComponent } from '../../../nav/components/navbar-default/navbar-default.component';
import { IniciarSesionComponent } from '../../components/iniciar-sesion/iniciar-sesion.component';

@Component({
    selector: 'app-pagina-iniciar-sesion',
    imports: [NavbarDefaultComponent, IniciarSesionComponent],
    templateUrl: './pagina-iniciar-sesion.component.html',
    styleUrl: './pagina-iniciar-sesion.component.css'
})
export class PaginaIniciarSesionComponent {}
