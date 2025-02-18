import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrada } from '../interfaces/entrada.interface';

@Injectable({
  providedIn: 'root',
})
export class RepositorService {
  http = inject(HttpClient);
  url = 'http://localhost:3000/';

  getRepositores(): Observable<Entrada[]> {
    return this.http.get<Entrada[]>(this.url);
  }

  getRepositorById(id: string): Observable<Entrada> {
    return this.http.get<Entrada>(`${this.url}/${id}`);
  }

  postRepositor(repositor: Entrada): Observable<Entrada> {
    return this.http.post<Entrada>(this.url, repositor);
  }

  deleteRepositor(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  putRepositor(id: string, repositor: Entrada): Observable<Entrada> {
    return this.http.put<Entrada>(`${this.url}/${id}`, repositor);
  }

  patchRepositor(id: string, repositor: Entrada): Observable<Entrada> {
    return this.http.patch<Entrada>(`${this.url}/${id}`, repositor);
  }
}
