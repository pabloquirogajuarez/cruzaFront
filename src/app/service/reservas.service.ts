import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservas } from '../model/reservas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
    URL = 'cruzaback-production.up.railway.app/reservas/';
    //URL = 'http://localhost:8080/reservas/';
  
    constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Reservas[]>{
    return this.httpClient.get<Reservas[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Reservas>{
    return this.httpClient.get<Reservas>(this.URL + `detail/${id}`);
  }

  public save(reservas: Reservas): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', reservas);
  }

  public update(id: number, reservas: Reservas): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, reservas);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
