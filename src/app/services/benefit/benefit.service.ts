import { Injectable } from '@angular/core';
import { API_URL } from '../../shared/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BenefitService {

  url = API_URL
  constructor(private httpClient: HttpClient) { }

  public addBenefit(data): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/benefit/add.php`, data);
  }
  

}
