import { Component } from '@angular/core';
import { LevantarApiComponent } from '../levantar-api/levantar-api.component';
import { NavbarComponent } from 'app/nav/components/navbar/navbar.component';

@Component({
  selector: 'app-pagina-levantar-api',
  standalone: true,
  imports: [LevantarApiComponent, NavbarComponent],
  templateUrl: './pagina-levantar-api.component.html',
  styleUrl: './pagina-levantar-api.component.css',
})
export class PaginaLevantarApiComponent {
  user = history.state.user;

  ngOnInit() {
    console.log('PAGINA LEVANTAR API', this.user);
  }
}
