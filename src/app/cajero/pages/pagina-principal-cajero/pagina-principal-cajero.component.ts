import { Component } from '@angular/core';
import { NavbarCajeroComponent } from 'app/nav/components/navbar-cajero/navbar-cajero.component';

@Component({
  selector: 'app-pagina-principal-cajero',
  standalone: true,
  imports: [NavbarCajeroComponent],
  templateUrl: './pagina-principal-cajero.component.html',
  styleUrl: './pagina-principal-cajero.component.css',
})
export class PaginaPrincipalCajeroComponent {}
