import { Component } from '@angular/core';
import { NavbarDefaultRepositorComponent } from 'app/nav/components/navbar-default-repositor/navbar-default-repositor.component';
import { AgregarEtiquetaRepositorComponent } from '../../../etiqueta/components/agregar-etiqueta-repositor/agregar-etiqueta-repositor.component';

@Component({
  selector: 'app-pagina-agregar-etiqueta-repositor',
  standalone: true,
  imports: [NavbarDefaultRepositorComponent, AgregarEtiquetaRepositorComponent],
  templateUrl: './pagina-agregar-etiqueta-repositor.component.html',
  styleUrl: './pagina-agregar-etiqueta-repositor.component.css',
})
export class PaginaAgregarEtiquetaRepositorComponent {}
