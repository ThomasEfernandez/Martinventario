import { Component } from '@angular/core';
import { NavbarDefaultRepositorComponent } from '../../../nav/components/navbar-default-repositor/navbar-default-repositor.component';
import { AgregarCategoriaComponent } from '../../../categoria/components/agregar-categoria/agregar-categoria.component';

@Component({
  selector: 'app-pagina-agregar-categoria-repositor',
  standalone: true,
  imports: [NavbarDefaultRepositorComponent, AgregarCategoriaComponent],
  templateUrl: './pagina-agregar-categoria-repositor.component.html',
  styleUrl: './pagina-agregar-categoria-repositor.component.css',
})
export class PaginaAgregarCategoriaRepositorComponent {}
