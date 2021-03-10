import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('BasicAuthInterceptor: Request intercepted.');
        // add header with basic auth credentials if user is logged in and request is to the api url
        const user = this.authenticationService.curUserValue;
        // const isLoggedIn = user && user.authdata;
        // const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (user && user.authdata) {
            console.log('BasicAuthInterceptor: adding authdata -> ' + user.authdata);
            request = request.clone({
                setHeaders: {
                    ContentType: `application/json`,
                    Authorization: `Basic ${user.authdata}`
                }
            });
        }

        return next.handle(request);
    }
}
