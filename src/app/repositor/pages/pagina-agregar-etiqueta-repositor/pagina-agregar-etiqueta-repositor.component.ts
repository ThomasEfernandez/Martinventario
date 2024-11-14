import { Component } from '@angular/core';
import { NavbarRepositorComponent } from 'app/nav/components/navbar-repositor/navbar-repositor.component';
import { AgregarEtiquetaRepositorComponent } from '../../../etiqueta/components/agregar-etiqueta-repositor/agregar-etiqueta-repositor.component';

@Component({
  selector: 'app-pagina-agregar-etiqueta-repositor',
  standalone: true,
  imports: [NavbarRepositorComponent, AgregarEtiquetaRepositorComponent],
  templateUrl: './pagina-agregar-etiqueta-repositor.component.html',
  styleUrl: './pagina-agregar-etiqueta-repositor.component.css',
})
export class PaginaAgregarEtiquetaRepositorComponent {}
