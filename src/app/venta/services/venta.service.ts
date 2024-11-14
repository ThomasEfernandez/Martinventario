import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from '../interfaces/venta.interface';

@Injectable({
  providedIn: 'root',
})
export class VentaService {
  http = inject(HttpClient);
  urlBase = 'http://localhost:3000/ventas';

  postVenta(aux: Venta): Observable<Venta> {
    return this.http.post<Venta>(this.urlBase, aux);
  }

  getVenta(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.urlBase);
  }

  getVentaById(id: string): Observable<Venta> {
    return this.http.get<Venta>(`${this.urlBase}/${id}`);
  }
}
