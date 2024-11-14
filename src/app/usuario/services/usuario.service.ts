import { Usuario } from '../interfaces/usuario.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  http = inject(HttpClient);
  url = 'http://localhost:3000/usuarios';

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  postUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario);
  }

  getUsuarioById(id: string | null): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  deleteUsuario(id: string | undefined): Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.url}/${id}`);
  }

  putUsuario(id: string | null, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.url}/${id}`, usuario);
  }

  patchUsuario(id: string | null, usuario: Usuario): Observable<Usuario> {
    return this.http.patch<Usuario>(`${this.url}/${id}`, usuario);
  }
}
