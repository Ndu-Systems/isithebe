import { Injectable } from '@angular/core';
import { API_URL } from '../../shared/config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  url: string = API_URL;
  constructor(private http: HttpClient) { }

  addPolicy(data): Observable<any> {
    return this.http.post<any>(`${this.url}/policy/add-policy.php`, data);
  }


}
