import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { RealizarEgresosComponent } from 'app/egreso/components/realizar-egresos/realizar-egresos.component';

@Component({
    selector: 'app-pagina-realizar-egresos-admin',
    imports: [NavbarAdminComponent,RealizarEgresosComponent],
    templateUrl: './pagina-realizar-egresos-admin.component.html',
    styleUrl: './pagina-realizar-egresos-admin.component.css'
})
export class PaginaRealizarVentaAdminComponent {
  tipo: string = 'admin';
}
