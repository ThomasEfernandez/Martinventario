import { Component } from '@angular/core';
import { NavbarComponent } from '../../../nav/components/navbar/navbar.component';
import { AgregarProductoComponent } from 'app/producto/components/agregar-producto/agregar-producto.component';

@Component({
  selector: 'app-pagina-agregar-producto',
  standalone: true,
  imports: [NavbarComponent, AgregarProductoComponent],
  templateUrl: './pagina-agregar-producto.component.html',
  styleUrl: './pagina-agregar-producto.component.css',
})
export class PaginaAgregarProductoComponent {
  user = history.state.user;

  ngOnInit() {
    console.log("PAGINA AGREGAR PRODUCTO", this.user)
  }
}
