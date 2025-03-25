import { Component } from '@angular/core';
import { NavbarAdminComponent } from "../../../nav/components/navbar-admin/navbar-admin.component";
import { EmpleadosComponent } from "../../empleados/empleados/empleados.component";

@Component({
  selector: 'app-pagina-empleado',
  standalone: true,
  imports: [NavbarAdminComponent, EmpleadosComponent],
  templateUrl: './pagina-empleado.component.html',
  styleUrl: './pagina-empleado.component.css'
})
export class PaginaEmpleadoComponent {

}

