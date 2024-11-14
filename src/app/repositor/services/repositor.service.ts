import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repositor } from '../interfaces/repositor.interface';

@Injectable({
  providedIn: 'root',
})
export class RepositorService {
  http = inject(HttpClient);
  url = 'http://localhost:3000/';

  getRepositores(): Observable<Repositor[]> {
    return this.http.get<Repositor[]>(this.url);
  }

  getRepositorById(id: string): Observable<Repositor> {
    return this.http.get<Repositor>(`${this.url}/${id}`);
  }

  postRepositor(repositor: Repositor): Observable<Repositor> {
    return this.http.post<Repositor>(this.url, repositor);
  }

  deleteRepositor(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  putRepositor(id: string, repositor: Repositor): Observable<Repositor> {
    return this.http.put<Repositor>(`${this.url}/${id}`, repositor);
  }

  patchRepositor(id: string, repositor: Repositor): Observable<Repositor> {
    return this.http.patch<Repositor>(`${this.url}/${id}`, repositor);
  }
}
