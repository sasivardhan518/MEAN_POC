import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../app/shared/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if(!this.authService.isUserLoggedIn()){
      this.router.navigate(['index']);
    }
    else{
      return true;
    }
  }
}
