import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('BasicAuthInterceptor: Request intercepted.');
        const user = this.authenticationService.curUserValue;
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
