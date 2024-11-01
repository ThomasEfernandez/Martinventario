import { Component } from '@angular/core';
import { NavbarDefaultComponent } from '../../../nav/components/navbar-default/navbar-default.component';
import { AgregarCategoriaComponent } from '../../components/agregar-categoria/agregar-categoria.component';

@Component({
  selector: 'app-pagina-agregar-categoria',
  standalone: true,
  imports: [NavbarDefaultComponent, AgregarCategoriaComponent],
  templateUrl: './pagina-agregar-categoria.component.html',
  styleUrl: './pagina-agregar-categoria.component.css',
})
export class PaginaAgregarCategoriaComponent {}
