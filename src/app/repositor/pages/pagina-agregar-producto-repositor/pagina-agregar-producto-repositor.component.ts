import { Component } from '@angular/core';
import { NavbarDefaultRepositorComponent } from '../../../nav/components/navbar-default-repositor/navbar-default-repositor.component';
import { AgregarProductoRepositorComponent } from '../../../producto/components/agregar-producto-repositor/agregar-producto-repositor.component';

@Component({
  selector: 'app-pagina-agregar-producto-repositor',
  standalone: true,
  imports: [NavbarDefaultRepositorComponent, AgregarProductoRepositorComponent],
  templateUrl: './pagina-agregar-producto-repositor.component.html',
  styleUrl: './pagina-agregar-producto-repositor.component.css',
})
export class PaginaAgregarProductoRepositorComponent {}
