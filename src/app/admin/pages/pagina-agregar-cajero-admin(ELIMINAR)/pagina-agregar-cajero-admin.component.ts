import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
/* import { AgregarUsuarioComponent } from '../../../repositor/components/agregar-entrada/agregar-entrada.component'; */

@Component({
  selector: 'app-pagina-agregar-cajero-admin',
  standalone: true,
  imports: [NavbarAdminComponent],
  templateUrl: './pagina-agregar-cajero-admin.component.html',
  styleUrl: './pagina-agregar-cajero-admin.component.css',
})
export class PaginaAgregarCajeroAdminComponent {
  usuarioNuevo: string = 'cajero';
}
