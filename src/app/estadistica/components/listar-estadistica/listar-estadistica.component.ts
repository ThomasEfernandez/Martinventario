import { Component } from '@angular/core';
import { EstadisticasEmpleadosComponent } from '../estadisticas-empleados/estadisticas-empleados.component';
import { EstadisticasIngresosComponent } from '../estadisticas-ingresos/estadisticas-ingresos.component';
import { EstadisticasEgresosComponent } from '../estadisticas-egresos/estadisticas-egresos.component';
import { EstadisticasPedidosComponent } from '../estadisticas-pedidos/estadisticas-pedidos.component';

@Component({
  selector: 'app-listar-estadistica',
  standalone: true,
  imports: [
    EstadisticasEmpleadosComponent,
    EstadisticasIngresosComponent,
    EstadisticasEgresosComponent,
    EstadisticasPedidosComponent,
  ],
  templateUrl: './listar-estadistica.component.html',
  styleUrl: './listar-estadistica.component.css',
})
export class ListarEstadisticaComponent {}
