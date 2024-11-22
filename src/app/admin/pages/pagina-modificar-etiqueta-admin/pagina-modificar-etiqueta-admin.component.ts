import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { ModificarEtiquetaComponent } from '../../../etiqueta/components/modificar-etiqueta/modificar-etiqueta.component';

@Component({
  selector: 'app-pagina-editar-modificar-admin',
  standalone: true,
  imports: [NavbarAdminComponent, ModificarEtiquetaComponent],
  templateUrl: './pagina-modificar-etiqueta-admin.component.html',
  styleUrl: './pagina-modificar-etiqueta-admin.component.css',
})
export class PaginaModificarEtiquetaAdminComponent {}
