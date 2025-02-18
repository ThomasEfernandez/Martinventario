import { Component } from '@angular/core';
import { AgregarCompraComponent } from 'app/compra/components/agregar-compra/agregar-compra.component';
import { NavbarEntradaComponent } from 'app/nav/components/navbar-entrada/navbar-entrada.component';

@Component({
  selector: 'app-pagina-agregar-compra-repositor',
  standalone: true,
  imports: [NavbarEntradaComponent, AgregarCompraComponent],
  templateUrl: './pagina-agregar-compra-entradas.component.html',
  styleUrl: './pagina-agregar-compra-entradas.component.css',
})
export class PaginaAgregarCompraRepositorComponent {
  tipo: string = 'repositor';
}
