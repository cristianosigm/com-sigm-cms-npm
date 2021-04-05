import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({ providedIn: 'root' })
export class UserService {

  private baseUrl = environment.apiUrl + '/user';

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  findSingle(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/single/${id}`);
  }

  create(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  update(user: User): Observable<any> {
    return this.http.post(`${this.baseUrl}/update`, user);
  }

  delete(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/delete/${id}`, null);
  }

}
