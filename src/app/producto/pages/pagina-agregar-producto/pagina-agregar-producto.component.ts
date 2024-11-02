import { VolverAProductoComponent } from './../../components/volver-a-producto/volver-a-producto.component';
import { Component } from '@angular/core';
import { AgregarProductoComponent } from '../../components/agregar-producto/agregar-producto.component';
import { NavbarDefaultComponent } from '../../../nav/components/navbar-default/navbar-default.component';

@Component({
  selector: 'app-pagina-agregar-producto',
  standalone: true,
  imports: [VolverAProductoComponent,AgregarProductoComponent, NavbarDefaultComponent],
  templateUrl: './pagina-agregar-producto.component.html',
  styleUrl: './pagina-agregar-producto.component.css',
})
export class PaginaAgregarProductoComponent {}
