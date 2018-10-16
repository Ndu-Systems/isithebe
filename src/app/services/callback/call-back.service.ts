import { Injectable } from '@angular/core'; 
import { API_URL } from '../../shared/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CallBackService {

  url = API_URL
  constructor(private httpClient: HttpClient) { }

  public logCallBack(data): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/callback/add.php`, data);
  }
  public editCallBack(data): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/callback/edit.php`, data);
  }
}
