import { Component } from '@angular/core';
import { NavbarAdminComponent } from "../../../nav/components/navbar-admin/navbar-admin.component";
import { ListarRepositorComponent } from "../../../repositor/components/listar-repositor/listar-repositor.component";

@Component({
  selector: 'app-pagina-repositores-admin',
  standalone: true,
  imports: [NavbarAdminComponent, ListarRepositorComponent],
  templateUrl: './pagina-repositores-admin.component.html',
  styleUrl: './pagina-repositores-admin.component.css'
})
export class PaginaRepositoresAdminComponent {

}
