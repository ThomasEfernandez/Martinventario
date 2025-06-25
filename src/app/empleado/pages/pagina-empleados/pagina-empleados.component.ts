import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { MenuEmpleadoComponent } from "../../components/menu-empleado/menu-empleado.component";
import { ListarUsuariosComponent } from 'app/usuario/components/listar-usuarios/listar-usuarios.component';

@Component({
  selector: 'app-pagina-empleados',
  standalone: true,
  imports: [NavbarComponent, MenuEmpleadoComponent, ListarUsuariosComponent],
  templateUrl: './pagina-empleados.component.html',
  styleUrl: './pagina-empleados.component.css',
})

export class PaginaEmpleadosComponent {
  user = history.state.user;

  ngOnInit() {
    console.log("PAGINA EMPLEADOS", this.user)
  }
}
