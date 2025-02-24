import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { AgregarUsuarioComponent } from "../../../usuario/components/agregar-usuario/agregar-usuario.component";

@Component({
  selector: 'app-pagina-agregar-repositor-admin',
  standalone: true,
  imports: [NavbarAdminComponent, AgregarUsuarioComponent],
  templateUrl: './pagina-agregar-entrada-admin.component.html',
  styleUrl: './pagina-agregar-entrada-admin.component.css',
})
export class PaginaAgregarRepositorAdminComponent {
  usuarioNuevo: string = 'repositor';
}
