import { Injectable, inject } from '@angular/core';
import { Cajero } from '../interfaces/cajero.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CajeroService {
  http = inject(HttpClient);
  url = 'http://localhost:3000/cajero'; //cambiar

  getCajero(): Observable<Cajero[]> {
    return this.http.get<Cajero[]>(this.url);
  }

  postCajero(cajero: Cajero): Observable<Cajero> {
    return this.http.post<Cajero>(this.url, cajero);
  }

  getCajeroById(id: string): Observable<Cajero> {
    return this.http.get<Cajero>(`${this.url}/${id}`);
  }

  deleteCajero(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  putCajero(id: string, cajero: Cajero): Observable<Cajero> {
    return this.http.put<Cajero>(`${this.url}/${id}`, cajero);
  }

  patchCategoria(id: string, categoria: Cajero): Observable<Cajero> {
    return this.http.patch<Cajero>(`${this.url}/${id}`, categoria);
  }
}
