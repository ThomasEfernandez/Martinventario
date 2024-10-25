import { inject, Injectable } from '@angular/core';
import { Productos } from '../component/interfaces/Productos.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
http= inject(HttpClient)
url='http://localhost:50411/productos'

//  get
getProducto ():Observable<Productos[]>{

  return this.http.get<Productos[]>(this.url)
}
// post 
postProducto (producto:Productos):Observable<Productos>{

  return this.http.post<Productos>(this.url,producto);
}


putProducto (id:number, producto:Productos):Observable<Productos>{

  return this.http.put<Productos>(`${this.url}/${id}`,producto);

}

deleteProducto (id:number, producto:Productos):Observable<Productos>{

  return this.http.delete<Productos>(`${this.url}/${id}`);

}

}
