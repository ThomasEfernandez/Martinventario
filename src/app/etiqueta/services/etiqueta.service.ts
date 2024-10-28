import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etiqueta } from './../interfaces/etiqueta.interface';

@Injectable({
  providedIn: 'root',
})
export class EtiquetaService {
  http = inject(HttpClient);
  url = 'http://localhost:3000/categorias/etiquetas';

  getEtiquetas(): Observable<Etiqueta[]> {
    return this.http.get<Etiqueta[]>(this.url);
  }

  postEtiqueta(etiqueta: Etiqueta): Observable<Etiqueta> {
    return this.http.post<Etiqueta>(this.url, etiqueta);
  }

  getEtiquetaById(id: number): Observable<Etiqueta> {
    return this.http.get<Etiqueta>(`${this.url}/${id}`);
  }

  deleteEtiqueta(id: number): Observable<Etiqueta> {
    return this.http.delete<Etiqueta>(`${this.url}/${id}`);
  }

  putEtiqueta(id: number, etiqueta: Etiqueta): Observable<Etiqueta> {
    return this.http.put<Etiqueta>(`${this.url}/${id}`, etiqueta);
  }

  patchEtiqueta(id: number, etiqueta: Etiqueta): Observable<Etiqueta> {
    return this.http.patch<Etiqueta>(`${this.url}/${id}`, etiqueta);
  }
}
