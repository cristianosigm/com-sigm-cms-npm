import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';
import { Login } from '../model/login';

const KEY_NICK = 'nickname';
const KEY_USER = 'user';
const KEY_ROLE = 'role';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private curUserSubject: BehaviorSubject<User>;

    constructor(private router: Router, private http: HttpClient) {
        let tempUser: any;
        // reads the current local storage to get the user from it, if its already saved.
        tempUser = localStorage.getItem(KEY_USER);
        console.log('AuthenticationService: Current user is ' + tempUser);
        this.curUserSubject = new BehaviorSubject<User>(JSON.parse(tempUser));
    }

    public get curUserValue(): User {
        console.log('AuthenticationService: Reading the current user...');
        return this.curUserSubject.value;
    }

    public get curRoleValue(): any {
        console.log('AuthenticationService: Reading the current role...');
        return localStorage.getItem(KEY_ROLE);
    }

    login(login: Login): Observable<User> {
        return this.http.post<any>(`${environment.apiUrl}/accounts/login`, login)
            .pipe(map((user: User) => {
                // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
                user.authdata = window.btoa(login.username + ':' + login.password);
                localStorage.setItem(KEY_USER, JSON.stringify(user));
                localStorage.setItem(KEY_ROLE, user.roleName);
                localStorage.setItem(KEY_NICK, user.displayName);
                this.curUserSubject.next(user);
                console.log('AuthenticationService: User authenticated successfully and stored on current session.');
                return user;
            }));
    }

    logout(): void {
        // close session on the backend
        this.http.post<any>(`${environment.apiUrl}/accounts/logout`, null);
        // remove user from local storage to log user out
        localStorage.removeItem(KEY_USER);
        localStorage.removeItem(KEY_ROLE);
        this.curUserSubject.next(new User());
        console.log('AuthenticationService: User removed successfully, current session cleaned.');
        this.router.navigate(['/home']);
    }

}
