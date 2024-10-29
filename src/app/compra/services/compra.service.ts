import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compra } from '../interfaces/compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  http = inject(HttpClient)
  url= "http://localhost:3000/compras"


  getCompras ():Observable<Compra[]>{
    return this.http.get<Compra[]> (this.url);
  }
  getComprasById (id:number):Observable<Compra>{
    return this.http.get<Compra>(`${this.url}/${id}`);
  }

  patchCompras (id:number,laCompra:Compra):Observable<Compra>{
    return this.http.patch<Compra>(`${this.url}/${id}`,laCompra);

  }
  
  putCompras (id:number,laCompra:Compra):Observable<Compra>{
    return this.http.put<Compra>(`${this.url}/${id}`,laCompra);

  }

  deleteCompra (id:number):Observable<Compra>{
    return this.http.delete<Compra>(`${this.url}/${id}`)
  }
  postCompra (laCompra:Compra):Observable<Compra>{
    return this.http.post<Compra>(this.url,laCompra);
  }






}
