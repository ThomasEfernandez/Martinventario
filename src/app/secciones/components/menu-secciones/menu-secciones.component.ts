import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EstadisticasEmpleadosComponent } from "../../../estadistica/VER/estadisticas-empleados/estadisticas-empleados.component";
import { ListarIngresosComponent } from "../../../ingreso/components/listar-ingresos/listar-ingresos.component";
import { ListarEgresosComponent } from "../../../egreso/components/listar-egresos/listar-egresos.component";
import { ListarPedidosComponent } from "../../../pedido/components/listar-pedidos/listar-pedidos.component";
import { EstadisticasIngresosComponent } from "../../../estadistica/VER/estadisticas-ingresos/estadisticas-ingresos.component";
import { EstadisticasEgresosComponent } from "../../../estadistica/VER/estadisticas-egresos/estadisticas-egresos.component";
import { EstadisticasPedidosComponent } from "../../../estadistica/VER/estadisticas-pedidos/estadisticas-pedidos.component";
import { Usuario } from 'app/usuario/interfaces/usuario.interface';

@Component({
  selector: 'app-menu-secciones',
  standalone: true,
  imports: [RouterModule, EstadisticasEmpleadosComponent, EstadisticasIngresosComponent, EstadisticasEgresosComponent, EstadisticasPedidosComponent],
  templateUrl: './menu-secciones.component.html',
  styleUrl: './menu-secciones.component.css',
})
export class MenuSeccionesComponent {
  @Input() user: Usuario = {
    id: '',
    nombre: '',
    apellido: '',
    usuario: '',
    contrasena: '',
    tipo: '',
    estado: false
  };
}
