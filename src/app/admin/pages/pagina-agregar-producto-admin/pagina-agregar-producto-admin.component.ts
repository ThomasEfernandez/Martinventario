import { Component } from '@angular/core';
import { NavbarDefaultAdminComponent } from '../../../nav/components/navbar-default-admin/navbar-default-admin.component';
import { AgregarProductoAdminComponent } from 'app/producto/components/agregar-producto-admin/agregar-producto-admin.component';

@Component({
  selector: 'app-pagina-agregar-producto-admin',
  standalone: true,
  imports: [NavbarDefaultAdminComponent, AgregarProductoAdminComponent],
  templateUrl: './pagina-agregar-producto-admin.component.html',
  styleUrl: './pagina-agregar-producto-admin.component.css',
})
export class PaginaAgregarProductoAdminComponent {}
