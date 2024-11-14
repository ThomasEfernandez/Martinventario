import { Component } from '@angular/core';
import { NavbarDefaultRepositorComponent } from '../../../nav/components/navbar-default-repositor/navbar-default-repositor.component';
import { AgregarCategoriaRepositorComponent } from '../../../categoria/components/agregar-categoria-repositor/agregar-categoria-repositor.component';

@Component({
  selector: 'app-pagina-agregar-categoria-repositor',
  standalone: true,
  imports: [
    NavbarDefaultRepositorComponent,
    AgregarCategoriaRepositorComponent,
  ],
  templateUrl: './pagina-agregar-categoria-repositor.component.html',
  styleUrl: './pagina-agregar-categoria-repositor.component.css',
})
export class PaginaAgregarCategoriaRepositorComponent {}
