import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Compra } from '../interfaces/compra.interface';

@Injectable({
  providedIn: 'root',
})
export class CompraService {
  http = inject(HttpClient);
  url = 'http://localhost:3000/compras';

  getCompras(): Observable<Compra[]> {
    return this.http.get<Compra[]>(this.url);
  }

  postCompra(compra: Compra): Observable<Compra> {
    return this.http.post<Compra>(this.url, compra);
  }

  getCompraById(id: string | null): Observable<Compra> {
    return this.http.get<Compra>(`${this.url}/${id}`);
  }

  deleteCompra(id: string | null): Observable<Compra> {
    return this.http.delete<Compra>(`${this.url}/${id}`);
  }

  putPedidos(id: string | null, compra: Compra): Observable<Compra> {
    return this.http.put<Compra>(`${this.url}/${id}`, compra);
  }
  patchPedidos(id: string | null, compra: Compra): Observable<Compra> {
    return this.http.patch<Compra>(`${this.url}/${id}`, compra);
  }
}
