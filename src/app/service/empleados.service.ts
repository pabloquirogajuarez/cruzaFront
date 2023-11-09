import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleados } from '../model/empleados';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
    URL = 'https://cruzaback-production.up.railway.app/empleados/';
    //URL = 'http://localhost:8080/empleados/';
  
    constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Empleados[]>{
    return this.httpClient.get<Empleados[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Empleados>{
    return this.httpClient.get<Empleados>(this.URL + `detail/${id}`);
  }

  public save(empleados: Empleados): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', empleados);
  }

  public update(id: number, empleados: Empleados): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, empleados);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
