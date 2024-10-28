import { Etiqueta } from './../interfaces/etiqueta.interface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtiquetaService {
  http = inject(HttpClient) ;
  url = 'http://localhost:3000/etiquetas' ;

  getEtiquetas (): Observable<Etiqueta[]> {
    return this.http.get<Etiqueta[]>(this.url) ;
  }

  getEtiquetaById (id: number): Observable<Etiqueta>{
    return this.http.get<Etiqueta>(`${this.url}/${id}`) ;
  }

  postEtiqueta (etiqueta: Etiqueta): Observable<Etiqueta> {
    return this.http.post<Etiqueta>(this.url, etiqueta) ;
  }

  putEtiqueta (id: number, etiqueta: Etiqueta): Observable<Etiqueta> {
    return this.http.put<Etiqueta>(`${this.url}/${id}`, etiqueta) ;
  }

  deleteEtiqueta (id: number): Observable<Etiqueta> {
    return this.http.delete<Etiqueta>(`${this.url}/${id}`) ;
  }

  /*patchEtiqueta (id: number, etiqueta: Etiqueta): Observable<Etiqueta>{
    return this.http.patch<Etiqueta>(`${this.url}/${id}`, etiqueta) ;
  }*/
}
