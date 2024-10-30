import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../interfaces/pedido.interface';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  http = inject(HttpClient);
  url = 'http://localhost:3000/pedidos';

  getPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.url);
  }

  postPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.url, pedido);
  }

  getPedidosById(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.url}/${id}`);
  }

  deletePedido(id: number): Observable<Pedido> {
    return this.http.delete<Pedido>(`${this.url}/${id}`);
  }

  putPedidos(id: number, pedido: Pedido): Observable<Pedido> {
    return this.http.put<Pedido>(`${this.url}/${id}`, pedido);
  }
  patchPedidos(id: number, pedido: Pedido): Observable<Pedido> {
    return this.http.patch<Pedido>(`${this.url}/${id}`, pedido);
  }
}
