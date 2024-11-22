import { Component } from '@angular/core';
import { NavbarAdminComponent } from '../../../nav/components/navbar-admin/navbar-admin.component';
import { ModificarEtiquetaComponent } from '../../../etiqueta/components/modificar-etiqueta/modificar-etiqueta.component';

@Component({
  selector: 'app-pagina-editar-modificar',
  standalone: true,
  imports: [NavbarAdminComponent, ModificarEtiquetaComponent],
  templateUrl: './pagina-modificar-etiqueta.component.html',
  styleUrl: './pagina-modificar-etiqueta.component.css',
})
export class PaginaModificarEtiquetaComponent {}
