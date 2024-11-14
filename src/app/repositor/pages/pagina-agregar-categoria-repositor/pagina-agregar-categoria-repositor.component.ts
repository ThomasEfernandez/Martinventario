import { Component } from '@angular/core';
import { NavbarRepositorComponent } from '../../../nav/components/navbar-repositor/navbar-repositor.component';
import { AgregarCategoriaRepositorComponent } from '../../../categoria/components/agregar-categoria-repositor/agregar-categoria-repositor.component';

@Component({
  selector: 'app-pagina-agregar-categoria-repositor',
  standalone: true,
  imports: [NavbarRepositorComponent, AgregarCategoriaRepositorComponent],
  templateUrl: './pagina-agregar-categoria-repositor.component.html',
  styleUrl: './pagina-agregar-categoria-repositor.component.css',
})
export class PaginaAgregarCategoriaRepositorComponent {}
