import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-supermercados',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './supermercados.component.html',
  styleUrl: './supermercados.component.css'
})

export class SupermercadosComponent{

  /**
   * @type {Map <Supermercados>}
   */
  mercadosMap: Map<number, Supermercados> = new Map();

  
  agregarSupermercado (mercado:Supermercados){

    this.mercadosMap.set (mercado.id,mercado);
    
    
  }

  

  agregarUno (){
    this.mercadosMap.set (1,{id:1,nombre:"lo de pepito",direccion:"adasda 1223",mail:"lodepepitoqgmail.com",telefono:22369122})
  }




  eliminarSupermercado (id:number){

    this.mercadosMap.delete(id);

  }

}


export class Supermercados {
  id:number;
  nombre:string;
  direccion:string;
  mail:string;
  telefono:number;
  constructor (id:number,nombre:string,direccion:string,mail:string,telefono:number){
    this.id = id;
    this.nombre = nombre;
    this.direccion = direccion;
    this.mail = mail;
    this.telefono = telefono;
  }


}





