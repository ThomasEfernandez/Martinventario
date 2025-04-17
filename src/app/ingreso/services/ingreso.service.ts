import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingreso } from '../interfaces/ingreso.interface';

@Injectable({
  providedIn: 'root',
})
export class IngresoService {
  http = inject(HttpClient);
  url = 'http://localhost:3000/ingresos';

  getIngresos(): Observable<Ingreso[]> {
    return this.http.get<Ingreso[]>(this.url);
  }

  getIngresoById(id: string): Observable<Ingreso> {
    return this.http.get<Ingreso>(`${this.url}/${id}`);
  }

  postIngreso(ingreso: Ingreso): Observable<Ingreso> {
    return this.http.post<Ingreso>(this.url, ingreso);
  }

  deleteIngreso(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  putIngreso(id: string, ingreso: Ingreso): Observable<Ingreso> {
    return this.http.put<Ingreso>(`${this.url}/${id}`, ingreso);
  }

  patchIngreso(id: string, ingreso: Ingreso): Observable<Ingreso> {
    return this.http.patch<Ingreso>(`${this.url}/${id}`, ingreso);
  }
}
