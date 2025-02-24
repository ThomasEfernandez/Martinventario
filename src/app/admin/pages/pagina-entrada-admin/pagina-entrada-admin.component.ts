import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { MenuRepositorComponent } from 'app/repositor/components/menu-entradas/menu-repositor.component';
import { ListarRepositorComponent } from '../../../repositor/components/listar-entradas/listar-repositor.component';

@Component({
  selector: 'app-pagina-repositores-admin',
  standalone: true,
  imports: [
    NavbarAdminComponent,
    MenuRepositorComponent,
    ListarRepositorComponent,
  ],
  templateUrl: './pagina-entrada-admin.component.html',
  styleUrl: './pagina-entrada-admin.component.css',
})
export class PaginaRepositoresAdminComponent {}
