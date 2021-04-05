import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';


@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {

    constructor(public router: Router, public authenticationService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const curUser = this.authenticationService.curUserValue;
        const curRole = this.authenticationService.curRoleValue;
        if (curUser) {
            console.log('AuthGuardService: User session is valid. The current role is ' + curRole);
            if (route.data?.roles?.length) {
                // a role is required. Checking...
                const allowedRoles = JSON.stringify(route.data.roles);
                if (allowedRoles.includes(curRole)) {
                    console.log('AuthGuardService: user has the required role.');
                    return true;
                } else {
                    console.log('AuthGuardService: user is not allowed to read this content.');
                    this.router.navigate(['/admin']);
                    return false;
                }
            } else {
                // no particular role is required
                return true;
            }
        }
        console.log('AuthGuardService: User session is NOT valid. Back to login page.');
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
