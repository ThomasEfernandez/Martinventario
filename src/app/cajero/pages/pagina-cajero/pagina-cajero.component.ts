import { Component } from '@angular/core';
import { AgregarCajeroComponent } from "../../components/agregar-cajero/agregar-cajero.component";
import { NavbarComponent } from "../../../nav/components/navbar/navbar.component";

@Component({
  selector: 'app-pagina-cajero',
  standalone: true,
  imports: [AgregarCajeroComponent, NavbarComponent],
  templateUrl: './pagina-cajero.component.html',
  styleUrl: './pagina-cajero.component.css'
})
export class PaginaCajeroComponent {

}
