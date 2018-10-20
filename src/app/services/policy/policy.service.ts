import { Injectable } from '@angular/core';
import { API_URL } from '../../shared/config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPolicyBenefit } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  url: string = API_URL;
  constructor(private http: HttpClient) { }

  addPolicy(data): Observable<any> {
    return this.http.post<any>(`${this.url}/policy/add-policy.php`, data);
  }
  editPolicy(data): Observable<any> {
    return this.http.post<any>(`${this.url}/policy/edit-policy.php`, data);
  }
  addBenefitToApolicy(data:IPolicyBenefit): Observable<any> {
    return this.http.post<any>(`${this.url}/policy/add-benefits-to-policy.php`, data);
  }


}
