import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-menu-entrada',
    imports: [RouterModule],
    templateUrl: './menu-entrada.component.html',
    styleUrl: './menu-entrada.component.css'
})
export class MenuEntradaComponent {
  @Input() tipo: string = '';
}
