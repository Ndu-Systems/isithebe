import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../shared/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {
  url = API_URL
  constructor(private httpClient: HttpClient) { }

  public addArchive(data): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/archive/add.php`, data);
  }
}
