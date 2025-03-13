import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { AgregarUsuarioComponent } from '../../../usuario/components/agregar-usuario/agregar-usuario.component';

@Component({
    selector: 'app-pagina-agregar-cajero-admin',
    imports: [NavbarAdminComponent, AgregarUsuarioComponent],
    templateUrl: './pagina-agregar-cajero-admin.component.html',
    styleUrl: './pagina-agregar-cajero-admin.component.css'
})
export class PaginaAgregarCajeroAdminComponent {
  usuarioNuevo: string = 'cajero';
}
