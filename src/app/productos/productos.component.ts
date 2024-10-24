import { Productos } from './../interfaces/Productos.interface';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { elementAt } from 'rxjs';
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
// crear funcionalidades (abm)
arrayProductos:Productos[]=[]




agregarProducto (productito:Productos){
  this.arrayProductos.push(productito);
}
eliminarPoducto (id:number){

const eliminar = this.arrayProductos.findIndex(element=>element.id===id);
this.arrayProductos.splice(eliminar,1);

}
traerProducto (id:number){
 if (this.arrayProductos.findIndex(element=>element.id===id)){
    return this.arrayProductos.find(element=>element.id===id)
     }else{
      return -1;
     }

     

}

}



