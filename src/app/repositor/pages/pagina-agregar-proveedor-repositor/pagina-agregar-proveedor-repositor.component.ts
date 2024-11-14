import { Component } from '@angular/core';
import { NavbarRepositorComponent } from '../../../nav/components/navbar-repositor/navbar-repositor.component';
import { AgregarProveedorRepositorComponent } from '../../../proveedor/components/agregar-proveedor-repositor/agregar-proveedor-repositor.component';

@Component({
  selector: 'app-pagina-agregar-proveedor-repositor',
  standalone: true,
  imports: [NavbarRepositorComponent, AgregarProveedorRepositorComponent],
  templateUrl: './pagina-agregar-proveedor-repositor.component.html',
  styleUrl: './pagina-agregar-proveedor-repositor.component.css',
})
export class PaginaAgregarProveedorRepositorComponent {}
