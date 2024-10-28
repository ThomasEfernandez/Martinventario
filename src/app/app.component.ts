import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IniciarSesionComponent } from './pagina-inicio-sesion/components/iniciar-sesion/iniciar-sesion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IniciarSesionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Martininventario';
}
