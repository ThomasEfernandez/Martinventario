import { Component } from '@angular/core';
import { NavbarEntradaComponent } from '../../../nav/components/navbar-entrada/navbar-entrada.component';
import { AgregarProveedorComponent } from '../../../proveedor/components/agregar-proveedor/agregar-proveedor.component';

@Component({
  selector: 'app-pagina-agregar-proveedor-repositor',
  standalone: true,
  imports: [NavbarEntradaComponent, AgregarProveedorComponent],
  templateUrl: './pagina-agregar-proveedor-entradas.component.html',
  styleUrl: './pagina-agregar-proveedor-entradas.component.css',
})
export class PaginaAgregarProveedorRepositorComponent {
  tipo: string = 'repositor';
}
