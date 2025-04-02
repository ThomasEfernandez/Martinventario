import { Component } from '@angular/core';
import { AgregarEntradaComponent } from 'app/entrada/components/agregar-entrada/agregar-entrada.component';
import { NavbarAdminComponent } from 'app/nav/components/navbar-admin/navbar-admin.component';

@Component({
    selector: 'app-pagina-agregar-compra-admin',
    imports: [NavbarAdminComponent, AgregarEntradaComponent],
    templateUrl: './pagina-agregar-compra-admin.component.html',
    styleUrl: './pagina-agregar-compra-admin.component.css'
})
export class PaginaAgregarCompraAdminComponent {
  tipo: string = 'admin';
}
