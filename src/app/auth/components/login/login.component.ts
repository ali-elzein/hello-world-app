import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  template: `
    <h2>Login</h2>
    <button (click)="login()">Fake Login</button>
  `
})
export class LoginComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  login() {
    localStorage.setItem('isLoggedIn', 'true');
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/image';
    this.router.navigate([returnUrl]);
  }
}