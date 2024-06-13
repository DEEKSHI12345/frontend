/**
 * @author Vishnu Somanath
 * @version 1.0.0
 * @return {void}
 * @example
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserAPI } from '@shared/constants/api-endpoints/user-api.const';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppConfig } from '../configs';
import { CommunicationService } from './communication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private communicationService: CommunicationService,
    private router: Router
  ) { }

  

  isLoggedIn(): boolean {
    return true;
  }

  logout(): void {
    localStorage.removeItem(AppConfig.auth.token);
    this.router.navigate(['/auth/login']);
  }
}
