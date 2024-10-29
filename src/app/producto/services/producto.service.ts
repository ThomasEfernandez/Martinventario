import { inject, Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  http = inject(HttpClient);
  url = 'http://localhost:3000/productos';

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }

  getProductoById (id:number):Observable<Producto>{
    return this.http.get<Producto>(`${this.url}/${id}`);
  }
  postProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.url, producto);
  }

  putProducto(id: number, producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.url}/${id}`, producto);
  }

  deleteProducto(id: number, producto: Producto): Observable<Producto> {
    return this.http.delete<Producto>(`${this.url}/${id}`);
  }
}
