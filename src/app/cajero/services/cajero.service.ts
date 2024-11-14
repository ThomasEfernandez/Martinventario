import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cajero } from '../interfaces/cajero.interface';

@Injectable({
  providedIn: 'root',
})
export class CajeroService {
  http = inject(HttpClient);
  url = 'http://localhost:3000/cajeros'; //REVISAR

  getCajeros(): Observable<Cajero[]> {
    return this.http.get<Cajero[]>(this.url);
  }

  postCajero(cajero: Cajero): Observable<Cajero> {
    return this.http.post<Cajero>(this.url, cajero);
  }

  getCajeroById(id: string | null): Observable<Cajero> {
    return this.http.get<Cajero>(`${this.url}/${id}`);
  }

  deleteCajero(id: string | undefined): Observable<Cajero> {
    return this.http.delete<Cajero>(`${this.url}/${id}`);
  }

  putCajero(id: string | null, cajero: Cajero): Observable<Cajero> {
    return this.http.put<Cajero>(`${this.url}/${id}`, cajero);
  }

  patchCajero(id: string | null, cajero: Cajero): Observable<Cajero> {
    return this.http.patch<Cajero>(`${this.url}/${id}`, cajero);
  }
}
