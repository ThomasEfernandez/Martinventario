import { Component } from '@angular/core';
import { NavbarComponent } from "../../../nav/components/navbar/navbar.component";
import { AgregarUsuarioComponent } from "../../../usuario/components/agregar-usuario/agregar-usuario.component";

@Component({
  selector: 'app-pagina-agregar-empleado',
  imports: [NavbarComponent, AgregarUsuarioComponent],
  templateUrl: './pagina-agregar-empleado.component.html',
  styleUrl: './pagina-agregar-empleado.component.css',
})
export class PaginaAgregarEmpleadoComponent {
  tipo: string = 'admin';
}
