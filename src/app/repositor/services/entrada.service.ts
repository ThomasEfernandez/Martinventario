import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrada } from '../interfaces/entrada.interface';

@Injectable({
  providedIn: 'root',
})
export class EntradaService {
  http = inject(HttpClient);
  url = 'http://localhost:3000/';

  getEntrada(): Observable<Entrada[]> {
    return this.http.get<Entrada[]>(this.url);
  }

  getEntradaById(id: string): Observable<Entrada> {
    return this.http.get<Entrada>(`${this.url}/${id}`);
  }

  postEntrada(repositor: Entrada): Observable<Entrada> {
    return this.http.post<Entrada>(this.url, repositor);
  }

  deleteEntrada(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  putEntrada(id: string, repositor: Entrada): Observable<Entrada> {
    return this.http.put<Entrada>(`${this.url}/${id}`, repositor);
  }

  patchEntrada(id: string, repositor: Entrada): Observable<Entrada> {
    return this.http.patch<Entrada>(`${this.url}/${id}`, repositor);
  }
}
