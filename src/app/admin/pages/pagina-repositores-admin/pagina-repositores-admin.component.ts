import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { MenuRepositorComponent } from 'app/repositor/components/menu-repositor/menu-repositor.component';
import { ListarRepositorComponent } from '../../../repositor/components/listar-repositor/listar-repositor.component';

@Component({
    selector: 'app-pagina-repositores-admin',
    imports: [
        NavbarAdminComponent,
        MenuRepositorComponent,
        ListarRepositorComponent,
    ],
    templateUrl: './pagina-repositores-admin.component.html',
    styleUrl: './pagina-repositores-admin.component.css'
})
export class PaginaRepositoresAdminComponent {}
