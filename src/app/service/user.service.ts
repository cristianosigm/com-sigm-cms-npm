import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({ providedIn: 'root' })
export class UserService {

  private baseUrl = environment.apiUrl + '/users';

  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  findSingle(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  save(user: User): Observable<any> {
    if (user.id && user.id > 0) {
      // updating existing user
      return this.http.post(`${this.baseUrl}/update`, user);
    } else {
      // new user
      return this.http.post(`${this.baseUrl}`, user);
    }
  }

  delete(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/delete/${id}`, null);
  }

}
