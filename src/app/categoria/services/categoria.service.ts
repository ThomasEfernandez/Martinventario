import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './../interfaces/categoria-inteface';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  http = inject(HttpClient);
  url = 'http://localhost:3000/categorias';

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url);
  }

  postCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.url, categoria);
  }

  getCategoriaById(id: number | null): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.url}/${id}`);
  }

  deleteCategoria(id: number | undefined): Observable<Categoria> {
    return this.http.delete<Categoria>(`${this.url}/${id}`);
  }

  putCategoria(id: number | null, categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.url}/${id}`, categoria);
  }

  patchCategoria(
    id: number | null,
    categoria: Categoria
  ): Observable<Categoria> {
    return this.http.patch<Categoria>(`${this.url}/${id}`, categoria);
  }
}
