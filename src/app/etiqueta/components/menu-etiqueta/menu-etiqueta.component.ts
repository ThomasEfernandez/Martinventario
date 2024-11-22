import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-etiqueta',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-etiqueta.component.html',
  styleUrl: './menu-etiqueta.component.css',
})
export class MenuEtiquetaComponent {
  @Input() tipo: string = '';
}
