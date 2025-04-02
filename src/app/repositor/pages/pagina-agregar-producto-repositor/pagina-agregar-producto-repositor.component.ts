import { Component } from '@angular/core';
import { NavbarRepositorComponent } from '../../../nav/components/navbar-repositor/navbar-repositor.component';
import { AgregarProductoComponent } from '../../../producto/components/agregar-producto/agregar-producto.component';

@Component({
    selector: 'app-pagina-agregar-producto-repositor',
    imports: [NavbarRepositorComponent, AgregarProductoComponent],
    templateUrl: './pagina-agregar-producto-repositor.component.html',
    styleUrl: './pagina-agregar-producto-repositor.component.css'
})
export class PaginaAgregarProductoRepositorComponent {
  tipo: string = 'repositor';
}
