import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ventas } from '../interfaces/Ventas.interface';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  http = inject(HttpClient)
  urlBase = "http://localhost:3000/ventas"

  postVenta(aux:Ventas):Observable<Ventas>{
    return this.http.post<Ventas>(this.urlBase,aux);
  }

  getVenta():Observable<Ventas[]>{
    return this.http.get<Ventas[]>(this.urlBase);
  }

  getVentaById(id:number):Observable<Ventas>{
    return this.http.get<Ventas>(`${this.urlBase}/${id}`)
  }
}
