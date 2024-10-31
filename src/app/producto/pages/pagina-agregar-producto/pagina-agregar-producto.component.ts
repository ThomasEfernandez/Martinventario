import { Component } from '@angular/core';
import { AgregarProductoComponent } from "../../components/agregar-producto/agregar-producto.component";
import { NavbarVistaAdminComponent } from "../../../nav/components/navbar-admin/navbar-vista-admin/navbar-vista-admin.component";

@Component({
  selector: 'app-pagina-agregar-producto',
  standalone: true,
  imports: [ AgregarProductoComponent, NavbarVistaAdminComponent,NavbarVistaAdminComponent],
  templateUrl: './pagina-agregar-producto.component.html',
  styleUrl: './pagina-agregar-producto.component.css'
})
export class PaginaAgregarProductoComponent {

}
