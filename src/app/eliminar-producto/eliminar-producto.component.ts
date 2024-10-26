import { Component } from '@angular/core';
import { NavbarComponent } from "../nav/components/navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-eliminar-producto',
  standalone: true,
  imports: [NavbarComponent,RouterModule],
  templateUrl: './eliminar-producto.component.html',
  styleUrl: './eliminar-producto.component.css'
})
export class EliminarProductoComponent {

}
