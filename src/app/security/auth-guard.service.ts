import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {

    constructor(public router: Router, public authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const curUser = this.authenticationService.curUserValue;
        if (curUser) {
            console.log('AuthGuardService: User session is valid.');
            return true;
        }
        console.log('AuthGuardService: User session is NOT valid. Back to login page.');
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
