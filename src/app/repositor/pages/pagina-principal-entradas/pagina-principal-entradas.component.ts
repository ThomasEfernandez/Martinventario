import { Component } from '@angular/core';
import { NavbarEntradaComponent } from '../../../nav/components/navbar-entrada/navbar-entrada.component';


@Component({
  selector: 'app-pagina-principal-entrada',
  standalone: true,
  imports: [NavbarEntradaComponent],
  templateUrl: './pagina-principal-entradas.component.html',
  styleUrl: './pagina-principal-entradas.component.css',
})
export class PaginaPrincipalRepositorComponent {}
