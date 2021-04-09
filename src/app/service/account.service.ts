import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PasswordReset } from '../model/passwordreset';
import { Signup } from '../model/signup';

@Injectable({ providedIn: 'root' })
export class AccountService {

  private baseUrl = environment.apiUrl + '/accounts';

  constructor(private http: HttpClient) { }

  signup(signup: Signup): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, signup);
  }

  resetRequest(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/reset/${email}`);
  }

  resetProcess(passwordReset: PasswordReset): Observable<any> {
    return this.http.post(`${this.baseUrl}/reset`, passwordReset);
  }

}
