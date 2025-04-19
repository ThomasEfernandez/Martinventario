import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EstadisticasEmpleadosComponent } from "./estadisticas-empleados/estadisticas-empleados.component";

@Component({
  selector: 'app-menu-secciones',
  standalone: true,
  imports: [RouterModule, EstadisticasEmpleadosComponent],
  templateUrl: './menu-secciones.component.html',
  styleUrl: './menu-secciones.component.css',
})
export class MenuSeccionesComponent {}
