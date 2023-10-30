import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedidos } from '../model/pedidos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
    URL = 'https://cruzapi-pabloquirogajuarez.koyeb.app/pedidos/';
    //URL = 'http://localhost:8080/pedidos/';
  
    constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Pedidos[]>{
    return this.httpClient.get<Pedidos[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Pedidos>{
    return this.httpClient.get<Pedidos>(this.URL + `detail/${id}`);
  }

  public save(pedidos: Pedidos): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', pedidos);
  }

  public update(id: number, pedidos: Pedidos): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, pedidos);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
