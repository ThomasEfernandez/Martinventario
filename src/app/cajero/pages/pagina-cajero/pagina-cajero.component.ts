import { Component } from '@angular/core';
import { AgregarCajeroComponent } from "../../components/agregar-cajero/agregar-cajero.component";
import { NavbarAdminComponent } from "../../../nav/components/navbar-admin/navbar-admin.component";
import { VolverAAdminComponent } from "../../../producto/components/volver-a-admin/volver-a-admin.component";

@Component({
  selector: 'app-pagina-cajero',
  standalone: true,
  imports: [AgregarCajeroComponent, NavbarAdminComponent, VolverAAdminComponent],
  templateUrl: './pagina-cajero.component.html',
  styleUrl: './pagina-cajero.component.css'
})
export class PaginaCajeroComponent {

}
