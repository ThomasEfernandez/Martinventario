import { Component } from '@angular/core';
import { NavbarEntradaComponent } from '../../../nav/components/navbar-entrada/navbar-entrada.component';
import { FondoRepositorComponent } from '../../../fondo/components/fondo-repositor/fondo-repositor.component';

@Component({
  selector: 'app-pagina-principal-repositor',
  standalone: true,
  imports: [NavbarEntradaComponent, FondoRepositorComponent],
  templateUrl: './pagina-principal-entradas.component.html',
  styleUrl: './pagina-principal-entradas.component.css',
})
export class PaginaPrincipalRepositorComponent {}
