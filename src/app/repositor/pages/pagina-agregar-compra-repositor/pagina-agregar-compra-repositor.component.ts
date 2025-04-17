import { Component } from '@angular/core';
import { RealizarIngresoComponent } from 'app/ingreso/components/realizar-ingreso/realizar-ingreso.component';
import { NavbarRepositorComponent } from 'app/nav/components/navbar-repositor/navbar-repositor.component';

@Component({
  selector: 'app-pagina-agregar-compra-repositor',
  standalone: true,
  imports: [NavbarRepositorComponent, RealizarIngresoComponent],
  templateUrl: './pagina-agregar-compra-repositor.component.html',
  styleUrl: './pagina-agregar-compra-repositor.component.css',
})
export class PaginaAgregarCompraRepositorComponent {
  tipo: string = 'repositor';
}
