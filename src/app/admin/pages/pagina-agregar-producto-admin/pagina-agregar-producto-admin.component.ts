import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { AgregarProductoComponent } from 'app/producto/components/agregar-producto/agregar-producto.component';

@Component({
    selector: 'app-pagina-agregar-producto-admin',
    imports: [NavbarAdminComponent, AgregarProductoComponent],
    templateUrl: './pagina-agregar-producto-admin.component.html',
    styleUrl: './pagina-agregar-producto-admin.component.css'
})
export class PaginaAgregarProductoAdminComponent {
  tipo: string = 'admin';
}
