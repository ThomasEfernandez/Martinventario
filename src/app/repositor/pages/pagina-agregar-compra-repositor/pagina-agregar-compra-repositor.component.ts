import { Component } from '@angular/core';
import { AgregarCompraComponent } from 'app/compra/components/agregar-compra/agregar-compra.component';
import { NavbarRepositorComponent } from 'app/nav/components/navbar-repositor/navbar-repositor.component';

@Component({
  selector: 'app-pagina-agregar-compra-repositor',
  standalone: true,
  imports: [NavbarRepositorComponent, AgregarCompraComponent],
  templateUrl: './pagina-agregar-compra-repositor.component.html',
  styleUrl: './pagina-agregar-compra-repositor.component.css',
})
export class PaginaAgregarCompraRepositorComponent {
  tipo: string = 'repositor';
}
