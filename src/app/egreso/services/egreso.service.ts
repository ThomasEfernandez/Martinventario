import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Egreso } from '../interfaces/egreso.interface';

@Injectable({
  providedIn: 'root',
})
export class EgresoService {
  http = inject(HttpClient);
  urlBase = 'http://localhost:3000/ventas';

  postVenta(aux: Egreso): Observable<Egreso> {
    return this.http.post<Egreso>(this.urlBase, aux);
  }

  getVenta(): Observable<Egreso[]> {
    return this.http.get<Egreso[]>(this.urlBase);
  }

  getVentaById(id: string | null): Observable<Egreso> {
    return this.http.get<Egreso>(`${this.urlBase}/${id}`);
  }
}
