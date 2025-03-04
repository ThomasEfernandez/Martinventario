import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { MenuRepositorComponent } from 'app/repositor/components/menu-entradas/menu-repositor.component';
import { ListarEntradaComponent } from '../../../repositor/components/listar-entradas/listar-entrada.component';

@Component({
  selector: 'app-pagina-repositores-admin',
  standalone: true,
  imports: [
    NavbarAdminComponent,
    MenuRepositorComponent,
    ListarEntradaComponent,
  ],
  templateUrl: './pagina-entrada-admin.component.html',
  styleUrl: './pagina-entrada-admin.component.css',
})
export class PaginaRepositoresAdminComponent {}
