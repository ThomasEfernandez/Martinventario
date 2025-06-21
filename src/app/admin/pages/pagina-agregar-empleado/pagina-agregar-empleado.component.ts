import { Component } from '@angular/core';
import { NavbarAdminComponent } from "../../../nav/components/navbar-admin/navbar-admin.component";
import { AgregarUsuarioComponent } from "../../../usuario/components/agregar-usuario/agregar-usuario.component";

@Component({
  selector: 'app-pagina-agregar-empleado',
  imports: [NavbarAdminComponent, AgregarUsuarioComponent],
  templateUrl: './pagina-agregar-empleado.component.html',
  styleUrl: './pagina-agregar-empleado.component.css',
})
export class PaginaAgregarEmpleadoComponent {
  tipo: string = 'admin';
}
