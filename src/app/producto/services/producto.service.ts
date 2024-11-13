import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  http = inject(HttpClient);
  url = 'http://localhost:3000/productos';

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }

  getProductoById(id: number | undefined): Observable<Producto> {
    return this.http.get<Producto>(`${this.url}/${id}`);
  }

  postProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.url, producto);
  }

  putProducto(id: number, producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.url}/${id}`, producto);
  }

  patchProducto(id: number, producto: Producto): Observable<Producto> {
    return this.http.patch<Producto>(`${this.url}/${id}`, producto);
  }

  deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
