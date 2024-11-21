import { Component } from '@angular/core';
import { NavbarAdminComponent } from "../../../nav/components/navbar-admin/navbar-admin.component";
import { ModificarCategoriaComponent } from "../../../categoria/components/modificar-categoria/modificar-categoria.component";

@Component({
  selector: 'app-pagina-modificar-categoria-admin',
  standalone: true,
  imports: [NavbarAdminComponent, ModificarCategoriaComponent],
  templateUrl: './pagina-modificar-categoria-admin.component.html',
  styleUrl: './pagina-modificar-categoria-admin.component.css'
})
export class PaginaModificarCategoriaAdminComponent {
tipo:string = 'admin';
}
