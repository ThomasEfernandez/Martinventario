import { Component } from '@angular/core';
import { AgregarCajeroComponent } from 'app/cajero/components/agregar-cajero/agregar-cajero.component';
import { NavbarAdminComponent } from 'app/nav/components/navbar-admin/navbar-admin.component';
import { VolverAAdminComponent } from 'app/producto/components/volver-a-admin/volver-a-admin.component';

@Component({
  selector: 'app-pagina-agregar-cajero',
  standalone: true,
  imports: [NavbarAdminComponent,VolverAAdminComponent,AgregarCajeroComponent],
  templateUrl: './pagina-agregar-cajero.component.html',
  styleUrl: './pagina-agregar-cajero.component.css'
})
export class PaginaAgregarCajeroComponent {

}
