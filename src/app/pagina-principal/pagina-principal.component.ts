import { Component } from '@angular/core';
import { NavbarComponent } from '../nav/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css',
})
export class PaginaPrincipalComponent {}
