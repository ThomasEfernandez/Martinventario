import { Component } from '@angular/core';
import { ListarProveedorComponent } from '../../components/listar-proveedores/listar-proveedores.component';
import { NavbarProveedoresComponent } from '../../../nav/components/navbar-proveedores/navbar-proveedores.component';
import { VolverAProductoComponent } from "../../../producto/components/volver-a-producto/volver-a-producto.component";

@Component({
  selector: 'app-pagina-proveedores',
  standalone: true,
  imports: [ListarProveedorComponent, NavbarProveedoresComponent, VolverAProductoComponent],
  templateUrl: './pagina-proveedores.component.html',
  styleUrl: './pagina-proveedores.component.css',
})
export class PaginaProveedoresComponent {}
