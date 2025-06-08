import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EstadisticasEmpleadosComponent } from "./components/estadisticas-empleados/estadisticas-empleados.component";
import { ListarIngresosComponent } from "../../ingreso/components/listar-ingresos/listar-ingresos.component";
import { ListarEgresosComponent } from "../../egreso/components/listar-egresos/listar-egresos.component";
import { ListarPedidosComponent } from "../../pedido/components/listar-pedidos/listar-pedidos.component";
import { EstadisticasIngresosComponent } from "./components/estadisticas-ingresos/estadisticas-ingresos.component";
import { EstadisticasEgresosComponent } from "./components/estadisticas-egresos/estadisticas-egresos.component";
import { EstadisticasPedidosComponent } from "./components/estadisticas-pedidos/estadisticas-pedidos.component";

@Component({
  selector: 'app-menu-secciones',
  standalone: true,
  imports: [RouterModule, EstadisticasEmpleadosComponent, EstadisticasIngresosComponent, EstadisticasEgresosComponent, EstadisticasPedidosComponent],
  templateUrl: './menu-secciones.component.html',
  styleUrl: './menu-secciones.component.css',
})
export class MenuSeccionesComponent {}
