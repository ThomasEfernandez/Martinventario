import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SupermercadosComponent } from "./supermercados/supermercados.component";
import { BrowserModule } from '@angular/platform-browser';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from "./categorias/categorias.component";
import { EtiquetasComponent } from "./etiquetas/etiquetas.component";
import { PaginaPrincipalComponent } from "./pagina-principal/pagina-principal.component";
import { AgregarUsuarioComponent } from "./Usuario/agregar-usuario/agregar-usuario.component";


@Component({
  selector: 'app-root',
  standalone: true,

<<<<<<< HEAD
  imports: [RouterOutlet, SupermercadosComponent, ProveedoresComponent, ProductosComponent, CategoriasComponent,
    EtiquetasComponent, PaginaPrincipalComponent,RouterOutlet,RouterModule], //acá importamos los componentes
=======
  imports: [RouterOutlet, SupermercadosComponent, ProveedoresComponent, ProductosComponent, CategoriasComponent,
    EtiquetasComponent, PaginaPrincipalComponent, RouterOutlet, AgregarUsuarioComponent], //acá importamos los componentes
>>>>>>> e89738fa14fa2d8cdb6b9456228fa554f87ace73

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Martininventario';
}
