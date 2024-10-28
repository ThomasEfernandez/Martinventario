import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaPrincipalComponent } from "./pagina-principal/pagina-principal.component";
import { AgregarUsuarioComponent } from './usuario/components/agregar-usuario/agregar-usuario.component';
import { IniciarSesionComponent } from "./pagina-inicio-sesion/components/iniciar-sesion/iniciar-sesion.component";
import { PaginaPrincipalAdminComponent } from "./pagina-admin/components/pagina-principal-admin/pagina-principal-admin.component";
import { PaginaProductosAdminComponent } from "./pagina-admin/components/pagina-productos-admin/pagina-productos-admin.component";
import { RealizarVentaCajeroComponent } from "./cajero/components/realizar-venta-cajero/realizar-venta-cajero.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaginaPrincipalComponent, AgregarUsuarioComponent, IniciarSesionComponent, 
    PaginaPrincipalAdminComponent, PaginaProductosAdminComponent, RealizarVentaCajeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Martininventario';
}
