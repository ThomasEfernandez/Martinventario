import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../interfaces/proveedor-interface';

@Injectable({
  providedIn: 'root',
})
export class ProveedorService {
  http = inject(HttpClient);
  url = 'http://localhost:3000/proveedores';

  getProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.url);
  }

  getProveedorById(id: string | undefined): Observable<Proveedor> {
    return this.http.get<Proveedor>(`${this.url}/${id}`);
  }

  postProveedor(proveedor: Proveedor): Observable<Proveedor> {
    return this.http.post<Proveedor>(this.url, proveedor);
  }

  putProducto(
    id: string | undefined,
    producto: Proveedor
  ): Observable<Proveedor> {
    return this.http.put<Proveedor>(`${this.url}/${id}`, producto);
  }

  patchProducto(
    id: string | undefined,
    producto: Proveedor
  ): Observable<Proveedor> {
    return this.http.patch<Proveedor>(`${this.url}/${id}`, producto);
  }

  deleteProveedor(id: string | undefined): Observable<Proveedor> {
    return this.http.delete<Proveedor>(`${this.url}/${id}`);
  }
}
