import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from '../model/post';

@Injectable({ providedIn: 'root' })
export class PostService {

  private baseUrl = environment.apiUrl + '/user';

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  findSingle(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/single/${id}`);
  }

  save(post: Post): Observable<any> {
    return this.http.post(`${this.baseUrl}`, post);
  }

  delete(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/delete/${id}`, null);
  }

}
