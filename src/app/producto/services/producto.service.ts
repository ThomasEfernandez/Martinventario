import { inject, Injectable } from '@angular/core';
import { Productos } from '../../interfaces/Productos.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
http= inject(HttpClient)
url='http://localhost:3000/productos'

//  get
postProducto (producto:Productos):Observable<Productos>{

  return this.htttpC
}
// post 


}
