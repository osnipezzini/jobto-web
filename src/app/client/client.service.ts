import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  apiUrl = `${environment.baseUrl}/api/client`;
  constructor(private http: HttpClient) { }

  /**
   * getAll
   */
  public getAll(): Observable<Client[]> {
    const clients = this.http.get<Client[]>(this.apiUrl);
    return clients;
  }

  /**
   * getById
   */
  public getById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${id.toString()}`);
  }
}
