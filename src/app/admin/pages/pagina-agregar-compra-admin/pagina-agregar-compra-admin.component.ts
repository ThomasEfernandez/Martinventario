import { Component } from '@angular/core';
import { AgregarCompraComponent } from 'app/compra/components/agregar-compra/agregar-compra.component';
import { NavbarAdminComponent } from 'app/nav/components/navbar-admin/navbar-admin.component';

@Component({
  selector: 'app-pagina-agregar-compra-admin',
  standalone: true,
  imports: [NavbarAdminComponent, AgregarCompraComponent],
  templateUrl: './pagina-agregar-compra-admin.component.html',
  styleUrl: './pagina-agregar-compra-admin.component.css',
})
export class PaginaAgregarCompraAdminComponent {
  tipo: string = 'admin';
}
