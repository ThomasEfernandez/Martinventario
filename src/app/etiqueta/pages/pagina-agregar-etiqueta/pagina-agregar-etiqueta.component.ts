import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { AgregarEtiquetaComponent } from '../../components/agregar-etiqueta/agregar-etiqueta.component';

@Component({
  selector: 'app-pagina-agregar-etiqueta',
  standalone: true,
  imports: [NavbarComponent, AgregarEtiquetaComponent],
  templateUrl: './pagina-agregar-etiqueta.component.html',
  styleUrl: './pagina-agregar-etiqueta.component.css',
})
export class PaginaAgregarEtiquetaComponent {
  user = history.state.user;

  ngOnInit() {
    console.log("PAGINA AGREGAR ETIQUETA", this.user)
  }
}
