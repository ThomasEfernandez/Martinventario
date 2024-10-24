import { Component } from '@angular/core';

@Component({
  selector: 'app-etiquetas',
  standalone: true,
  imports: [],
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