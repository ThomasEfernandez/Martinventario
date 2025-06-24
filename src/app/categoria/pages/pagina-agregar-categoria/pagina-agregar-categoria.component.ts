import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { AgregarCategoriaComponent } from '../../../categoria/components/agregar-categoria/agregar-categoria.component';

@Component({
  selector: 'app-pagina-agregar-categoria',
  standalone: true,
  imports: [NavbarComponent, AgregarCategoriaComponent],
  templateUrl: './pagina-agregar-categoria.component.html',
  styleUrl: './pagina-agregar-categoria.component.css',
})
export class PaginaAgregarCategoriaComponent {
  user = history.state.user;

  ngOnInit() {
    console.log("PAGINA AGREGAR CATEGORIA", this.user)
  }
}
