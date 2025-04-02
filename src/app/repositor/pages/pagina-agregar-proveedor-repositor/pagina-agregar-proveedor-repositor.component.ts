import { Component } from '@angular/core';
import { NavbarRepositorComponent } from '../../../nav/components/navbar-repositor/navbar-repositor.component';
import { AgregarProveedorComponent } from '../../../proveedor/components/agregar-proveedor/agregar-proveedor.component';

@Component({
    selector: 'app-pagina-agregar-proveedor-repositor',
    imports: [NavbarRepositorComponent, AgregarProveedorComponent],
    templateUrl: './pagina-agregar-proveedor-repositor.component.html',
    styleUrl: './pagina-agregar-proveedor-repositor.component.css'
})
export class PaginaAgregarProveedorRepositorComponent {
  tipo: string = 'repositor';
}
