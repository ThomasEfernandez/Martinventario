import { Component } from '@angular/core';
import { ListarProveedorComponent } from '../../components/listar-proveedores/listar-proveedores.component';
import { NavbarProveedoresComponent } from '../../../nav/components/navbar-proveedores/navbar-proveedores.component';

@Component({
  selector: 'app-pagina-proveedores',
  standalone: true,
  imports: [ListarProveedorComponent, NavbarProveedoresComponent],
  templateUrl: './pagina-proveedores.component.html',
  styleUrl: './pagina-proveedores.component.css',
})
export class PaginaProveedoresComponent {}
