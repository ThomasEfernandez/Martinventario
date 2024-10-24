import { Component } from '@angular/core';
import { EtiquetasComponent } from '../etiquetas/etiquetas.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {


}
