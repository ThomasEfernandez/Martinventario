import { Categoria } from './../interfaces/categoria-inteface';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  http = inject(HttpClient) ;
  url = 'http://localhost:3000/categorias'

  getCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url) ;
  }

  getCategoriaById(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`${this.url}/${id}`) ;
  }

  postCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(this.url, categoria) ;
  }

  putCategoria(id: number, categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>(`${this.url}/${id}`, categoria) ;
  }

  deleteCategoria(id: number): Observable<Categoria>{
    return this.http.delete<Categoria>(`${this.url}/${id}`) ;
  }

  patchCategoria(id: number, categoria: Categoria): Observable<Categoria>{
    return this.http.patch<Categoria>(`${this.url}/${id}`, categoria) ;
  }
}
