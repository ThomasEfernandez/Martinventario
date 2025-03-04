import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { AgregarEntradaComponent } from '../../../repositor/components/agregar-entrada/agregar-entrada.component';

@Component({
  selector: 'app-pagina-agregar-repositor-admin',
  standalone: true,
  imports: [NavbarAdminComponent, AgregarEntradaComponent],
  templateUrl: './pagina-agregar-entrada-admin.component.html',
  styleUrl: './pagina-agregar-entrada-admin.component.css',
})
export class PaginaAgregarRepositorAdminComponent {
  entradaNueva: string = 'entrada';
}
