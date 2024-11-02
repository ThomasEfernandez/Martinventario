import { Component } from '@angular/core';
import { NavbarDefaultRepositorComponent } from '../../../nav/components/navbar-default-repositor/navbar-default-repositor.component';
import { AgregarProveedorRepositorComponent } from '../../../proveedor/components/agregar-proveedor-repositor/agregar-proveedor-repositor.component';

@Component({
  selector: 'app-pagina-agregar-proveedor-repositor',
  standalone: true,
  imports: [
    NavbarDefaultRepositorComponent,
    AgregarProveedorRepositorComponent,
  ],
  templateUrl: './pagina-agregar-proveedor-repositor.component.html',
  styleUrl: './pagina-agregar-proveedor-repositor.component.css',
})
export class PaginaAgregarProveedorRepositorComponent {}
