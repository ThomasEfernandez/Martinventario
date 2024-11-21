import { Component } from '@angular/core';
import { NavbarRepositorComponent } from '../../../nav/components/navbar-repositor/navbar-repositor.component';
import { FondoRepositorComponent } from '../../../fondo/components/fondo-repositor/fondo-repositor.component';

@Component({
  selector: 'app-pagina-principal-repositor',
  standalone: true,
  imports: [NavbarRepositorComponent, FondoRepositorComponent],
  templateUrl: './pagina-principal-repositor.component.html',
  styleUrl: './pagina-principal-repositor.component.css',
})
export class PaginaPrincipalRepositorComponent {}
