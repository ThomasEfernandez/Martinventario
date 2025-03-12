import { Component } from '@angular/core';
import { AgregarEntradaComponent } from 'app/compra/components/agregar-entrada/agregar-entrada.component';
import { NavbarRepositorComponent } from 'app/nav/components/navbar-repositor/navbar-repositor.component';

@Component({
  selector: 'app-pagina-agregar-compra-repositor',
  standalone: true,
  imports: [NavbarRepositorComponent, AgregarEntradaComponent],
  templateUrl: './pagina-agregar-compra-repositor.component.html',
  styleUrl: './pagina-agregar-compra-repositor.component.css',
})
export class PaginaAgregarCompraRepositorComponent {
  tipo: string = 'repositor';
}
