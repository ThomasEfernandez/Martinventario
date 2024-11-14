import { Component } from '@angular/core';
import { ListarCajerosComponent } from "../../../cajero/components/listar-cajeros/listar-cajeros.component";
import { NavbarAdminComponent } from 'app/nav/components/navbar-admin/navbar-admin.component';

@Component({
  selector: 'app-pagina-cajeros-admin',
  standalone: true,
  imports: [NavbarAdminComponent,ListarCajerosComponent],
  templateUrl: './pagina-cajeros-admin.component.html',
  styleUrl: './pagina-cajeros-admin.component.css'
})
export class PaginaCajerosAdminComponent {

}
