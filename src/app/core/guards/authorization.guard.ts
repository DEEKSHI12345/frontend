import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivateChild {

  constructor(
    private router: Router
  ) { }

  private checkGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> {
    if (!this.isAuthorized()) {
      this.router.navigate(['no-access']);
      return of(false);
    } else {
      return of(true);
    }
  }

  private isAuthorized(): boolean {
    return true;
  }

  canActivateChild(activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> {
    return this.checkGuard(activatedRouteSnapshot, state);
  }
}
