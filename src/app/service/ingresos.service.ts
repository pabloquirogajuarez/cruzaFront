import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingresos } from '../model/ingresos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {
    //URL = 'https://cruzaback-production.up.railway.app/ingresos/';
    URL = 'http://localhost:8080/ingresos/';
  
    constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Ingresos[]>{
    return this.httpClient.get<Ingresos[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Ingresos>{
    return this.httpClient.get<Ingresos>(this.URL + `detail/${id}`);
  }

  public save(ingresos: Ingresos): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', ingresos);
  }

  public update(id: number, ingresos: Ingresos): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, ingresos);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
