import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';
import { Login } from '../model/login';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private curUserSubject: BehaviorSubject<User>;
    public curUser: Observable<User>;

    constructor(private router: Router, private http: HttpClient) {
        let tempUser: any;
        // reads the current local storage to get the user from it, if its already saved.
        tempUser = localStorage.getItem('user');
        this.curUserSubject = new BehaviorSubject<User>(JSON.parse(tempUser));
        this.curUser = this.curUserSubject.asObservable();
    }

    public get curUserValue(): User {
        console.log('AuthenticationService: Reading the current user...');
        return this.curUserSubject.value;
    }

    login(login: Login): Observable<User> {
        return this.http.post<any>(`${environment.apiUrl}/login`, login)
            .pipe(map((user: User) => {
                // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
                user.authdata = window.btoa(login.username + ':' + login.password);
                localStorage.setItem('user', JSON.stringify(user));
                this.curUserSubject.next(user);
                console.log('AuthenticationService: User authenticated successfully and stored on current session.');
                return user;
            }));
    }

    logout(): void {
        // close session on the backend
        this.http.post<any>(`${environment.apiUrl}/logout`, null);
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.curUserSubject.next(new User());
        console.log('AuthenticationService: User removed successfully, current session cleaned.');
        this.router.navigate(['/home']);
    }

}
