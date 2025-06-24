import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { EmpleadosComponent } from '../../empleados/empleados/empleados.component';

@Component({
  selector: 'app-pagina-empleado',
  standalone: true,
  imports: [NavbarComponent, EmpleadosComponent],
  templateUrl: './pagina-empleado.component.html',
  styleUrl: './pagina-empleado.component.css',
})
export class PaginaEmpleadoComponent { }
