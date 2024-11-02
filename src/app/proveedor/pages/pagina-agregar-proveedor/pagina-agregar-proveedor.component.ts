import { Component } from '@angular/core';
import { NavbarDefaultComponent } from '../../../nav/components/navbar-default/navbar-default.component';
import { AgregarProveedorComponent } from '../../components/agregar-proveedor/agregar-proveedor.component';

@Component({
  selector: 'app-pagina-agregar-proveedor',
  standalone: true,
  imports: [NavbarDefaultComponent, AgregarProveedorComponent],
  templateUrl: './pagina-agregar-proveedor.component.html',
  styleUrl: './pagina-agregar-proveedor.component.css',
})
export class PaginaAgregarProveedorComponent {}
