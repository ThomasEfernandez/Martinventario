import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Etiqueta } from '../interfaces/etiqueta.interface';
import { Categoria } from '../../categoria/interfaces/categoria-inteface';
import { CategoriaService } from '../../categoria/services/categoria.service';

@Injectable({
  providedIn: 'root',
})
export class EtiquetaService {
  http = inject(HttpClient);
  url = 'http://localhost:3000/categorias';

  getEtiquetas(): Observable<Etiqueta[]> {
    return this.http.get<Etiqueta[]>(this.url);
  }

  getEtiquetaById(id: number): Observable<Etiqueta> {
    return this.http.get<Etiqueta>(`${this.url}/${id}`);
  }

  postEtiqueta(etiqueta: Etiqueta): Observable<Etiqueta> {
    return this.http.post<Etiqueta>(this.url, etiqueta);
  }

  deleteEtiqueta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  patchEtiqueta(id: number, etiqueta: Etiqueta): Observable<Etiqueta> {
    return this.http.patch<Etiqueta>(`${this.url}/${id}`, etiqueta);
  }

  putEtiqueta(id: number, etiqueta: Etiqueta): Observable<Etiqueta> {
    return this.http.put<Etiqueta>(`${this.url}/${id}`, etiqueta);
  }
}
