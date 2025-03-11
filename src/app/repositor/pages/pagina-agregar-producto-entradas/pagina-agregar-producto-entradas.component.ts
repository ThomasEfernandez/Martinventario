import { Component } from '@angular/core';
import { NavbarEntradaComponent } from '../../../nav/components/navbar-entrada/navbar-entrada.component';
import { AgregarProductoComponent } from '../../../producto/components/agregar-producto/agregar-producto.component';

@Component({
  selector: 'app-pagina-agregar-producto-repositor',
  standalone: true,
  imports: [AgregarProductoComponent, NavbarEntradaComponent],
  templateUrl: './pagina-agregar-producto-entradas.component.html',
  styleUrl: './pagina-agregar-producto-entradas.component.css',
})
export class PaginaAgregarProductoRepositorComponent {
  tipo: string = 'repositor';
}
