import { Component } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import { SupermercadosComponent } from "./supermercados/supermercados.component";
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProductosComponent } from './producto/component/productos/productos.component';
import { CategoriasComponent } from "./categorias/categorias.component";
import { EtiquetasComponent } from "./etiquetas/etiquetas.component";
import { PaginaPrincipalComponent } from "./pagina-principal/pagina-principal.component";
import { AgregarUsuarioComponent } from './usuario/components/agregar-usuario/agregar-usuario.component';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, SupermercadosComponent, ProveedoresComponent, ProductosComponent, CategoriasComponent,
    EtiquetasComponent, PaginaPrincipalComponent,RouterOutlet, AgregarUsuarioComponent], //acá importamos los componentes

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Martininventario';
}
