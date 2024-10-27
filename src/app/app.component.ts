import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ProductosComponent } from './producto/productos/productos.component';
import { CategoriasComponent } from "./categorias/categorias.component";
import { EtiquetasComponent } from "./etiquetas/etiquetas.component";
import { PaginaPrincipalComponent } from "./pagina-principal/pagina-principal.component";
import { AgregarUsuarioComponent } from './usuario/components/agregar-usuario/agregar-usuario.component';
import { IniciarSesionComponent } from "./sesion/components/iniciar-sesion/iniciar-sesion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProveedoresComponent, ProductosComponent, CategoriasComponent,
    EtiquetasComponent, PaginaPrincipalComponent, AgregarUsuarioComponent, IniciarSesionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Martininventario';
}
