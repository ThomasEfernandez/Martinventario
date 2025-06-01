import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListarEstadisticaComponent } from '../../../estadistica/components/listar-estadistica/listar-estadistica.component';
import { EstadisticasIngresosComponent } from 'app/admin/menu-secciones/components/estadisticas-ingresos/estadisticas-ingresos.component';
import { EstadisticasEgresosComponent } from 'app/admin/menu-secciones/components/estadisticas-egresos/estadisticas-egresos.component';
import { EstadisticasPedidosComponent } from 'app/admin/menu-secciones/components/estadisticas-pedidos/estadisticas-pedidos.component';

@Component({
  selector: 'app-menu-secciones-base',
  imports: [
    RouterModule,
    EstadisticasIngresosComponent,
    EstadisticasEgresosComponent,
    EstadisticasPedidosComponent,
  ],
  templateUrl: './menu-secciones-base.component.html',
  styleUrl: './menu-secciones-base.component.css',
})
export class MenuSeccionesBaseComponent {}
