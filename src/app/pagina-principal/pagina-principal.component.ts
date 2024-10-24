import { Component } from '@angular/core';
import { RegistrarseComponent } from "../registrarse/registrarse.component";
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [RegistrarseComponent, NavbarComponent],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {

}
