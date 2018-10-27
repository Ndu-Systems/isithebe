import { Injectable } from '@angular/core';
import { API_URL } from '../../shared/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPolicyholder } from '../../models/policyholder/policyholder';

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

  // policy holder
  addPolicyHolder(data:IPolicyholder): Observable<any> {
    return this.http.post<any>(`${this.url}/client/add-policyholder.php`, data);
  }
  addBeneficiary(data:any): Observable<any> {
    return this.http.post<any>(`${this.url}/client/add-beneficiary.php`, data);
  }

  getPolicies():Observable<any>{
    return this.http.get<any>(`${this.url}/client/get-policies.php`);
}

  getPoliciesAndBens(UserId:string):Observable<any>{
    return this.http.get<any>(`${this.url}/client/get-policies-and-beneficiaries.php?UserId=${UserId}`);
}

}
