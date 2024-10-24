import { Productos } from './../interfaces/Productos.interface';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { elementAt } from 'rxjs';
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, NavbarComponent,RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
// crear funcionalidades (abm)
arrayProductos:Productos[]=[{
  id:1,
  nombreProducto:"galletitas",
  codigo:1,
  marca:"Oreo",
  cantidad:20,
  precioVenta:2100,
  precioCompra:1500
}
];


//ALTA
//AgregarProducto al arreglo de productos
agregarProducto (productito:Productos){
  this.arrayProductos.push(productito);
}


//BAJA
//Eliminar Producto por id en el arreglo
eliminarPoducto (id:number){

const eliminar = this.arrayProductos.findIndex(element=>element.id===id);
this.arrayProductos.splice(eliminar,1);
}





///MODIFICACIÓN
//busca el producto por id y si lo encuentra lo retorna
traerProducto (id:number){
  if (this.arrayProductos.findIndex(element=>element.id===id)){
     return this.arrayProductos.find(element=>element.id===id)
      }else{
       return -1;
      }
 
      
 
 }
//Se le envia el producto y se le disminuye una unidad
modificarCantidad (producto:Productos){

  if (producto.cantidad<5){

    console.log('Llamar al proveedor');
    
  }else if (producto.cantidad>0){
    producto.cantidad=producto.cantidad-1;
  }else{
    console.log('No hay mas stock de este producto.');
    
  }


}
modificarPrecioVenta (producto:Productos,nuevoPrecio:number){
producto.precioVenta = nuevoPrecio;
}
//
modificarPrecioCompra (producto:Productos,nuevoPrecio:number){
  producto.precioCompra = nuevoPrecio;
}
//
modificarNombre (producto:Productos,nombre:string){
producto.nombreProducto = nombre;
}

}