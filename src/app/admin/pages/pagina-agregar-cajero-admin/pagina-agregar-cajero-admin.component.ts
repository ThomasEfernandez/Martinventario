import { Component } from '@angular/core';
import { NavbarAdminComponent } from "../../../nav/components/navbar-admin/navbar-admin.component";
import { AgregarCajerosComponent } from "../../../cajero/components/agregar-cajeros/agregar-cajeros.component";

@Component({
  selector: 'app-pagina-agregar-cajero-admin',
  standalone: true,
  imports: [NavbarAdminComponent, AgregarCajerosComponent],
  templateUrl: './pagina-agregar-cajero-admin.component.html',
  styleUrl: './pagina-agregar-cajero-admin.component.css'
})
export class PaginaAgregarCajeroAdminComponent {

}
