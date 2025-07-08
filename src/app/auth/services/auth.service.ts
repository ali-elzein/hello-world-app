import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'access_token';
  
  constructor(private router: Router) {}

  login(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    // const token = localStorage.getItem(this.TOKEN_KEY);
    // return token !== null && !this.jwtHelper.isTokenExpired(token);
    return localStorage.getItem('isLoggedIn') == 'true';
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}