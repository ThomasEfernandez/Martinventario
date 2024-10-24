import { Component } from '@angular/core';
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

export class Etiquetas {
  nombre:string;
  descripcion:string;
  
  constructor (nombre:string,descripcion:string){
    this.nombre = nombre;
    this.descripcion=descripcion;
  }
  
}