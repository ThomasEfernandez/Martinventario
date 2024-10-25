import { Component } from '@angular/core';
import { Repositores } from '../interfaces/Repositores.interface';

@Component({
  selector: 'app-repositores',
  standalone: true,
  imports: [],
  templateUrl: './repositores.component.html',
  styleUrl: './repositores.component.css'
})
export class RepositoresComponent {
  listaRepositores: Set<Repositores> = new Set<Repositores>();

  agregarRepositores = (repositor:Repositores) =>{

    this.listaRepositores.add(repositor);

  }

  eliminarRepositorPorID=(id:number)=>{
    this.listaRepositores.forEach(element => {
      if(element.id==id){
        element.estado=false;
      }
    });
  }
}


