import { Injectable } from '@angular/core';
import { API_URL } from '../../shared/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  url: string = API_URL;
  constructor(private http: HttpClient) { }

  addClient(data): Observable<any> {
    return this.http.post<any>(`${this.url}/client/add-client.php`, data);
  }

  updateClient(data): Observable<any> {
    return this.http.post<any>(`${this.url}/client/edit-client.php`, data);
  }

}
