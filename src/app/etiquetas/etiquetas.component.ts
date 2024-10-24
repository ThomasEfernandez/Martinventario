import { Component } from '@angular/core';
import { Etiquetas } from '../interfaces/Etiquetas.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-etiquetas',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './etiquetas.component.html',
  styleUrl: './etiquetas.component.css'
})
export class EtiquetasComponent {

}

