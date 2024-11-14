import { Component } from '@angular/core';
import { NavbarRepositorComponent } from '../../../nav/components/navbar-repositor/navbar-repositor.component';
import { AgregarProductoRepositorComponent } from '../../../producto/components/agregar-producto-repositor/agregar-producto-repositor.component';

@Component({
  selector: 'app-pagina-agregar-producto-repositor',
  standalone: true,
  imports: [NavbarRepositorComponent, AgregarProductoRepositorComponent],
  templateUrl: './pagina-agregar-producto-repositor.component.html',
  styleUrl: './pagina-agregar-producto-repositor.component.css',
})
export class PaginaAgregarProductoRepositorComponent {}
