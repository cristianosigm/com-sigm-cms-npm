import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Content } from '../model/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private baseUrl = environment.apiUrl + '/contents';

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  findSingle(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  save(post: Content): Observable<any> {
    return this.http.post(`${this.baseUrl}`, post);
  }

  delete(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/delete/${id}`, null);
  }

}
