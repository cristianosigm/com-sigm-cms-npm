import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Content } from 'src/app/model/content';

@Injectable({ providedIn: 'root' })
export class ContentService {

  private baseUrl = environment.apiUrl + '/contents';

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  findSingle(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  save(content: Content): Observable<any> {
    return this.http.post(`${this.baseUrl}`, content);
  }

  delete(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/delete/${id}`, null);
  }

}
