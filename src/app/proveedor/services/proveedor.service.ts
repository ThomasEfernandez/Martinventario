import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from '../interfaces/proveedor-interface';

@Injectable({
  providedIn: 'root',
})
export class ProveedorService {
  private url = 'http://localhost:3000/proveedores';

  constructor(private http: HttpClient) {}

  agregarProveedor(proveedor: Proveedor): Observable<Proveedor> {
    return this.http.post<Proveedor>(this.url, proveedor);
  }

  obtenerProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.url);
  }

  eliminarProveedor(cuit: string): Observable<Proveedor> {
    return this.http.delete<Proveedor>(`${this.url}/${cuit}`);
  }
  
}
