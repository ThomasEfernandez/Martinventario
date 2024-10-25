import { Component } from '@angular/core';
import { NavbarComponent } from "../../../navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-modificar-producto',
  standalone: true,
  imports: [NavbarComponent,RouterModule],
  templateUrl: './modificar-producto.component.html',
  styleUrl: './modificar-producto.component.css'
})
export class ModificarProductoComponent {

}
