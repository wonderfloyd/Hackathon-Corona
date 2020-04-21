import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';

import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    public userService: UserService
  ) {}

  canActivate(): Promise<boolean> {
    console.log('auth guard running');
    return new Promise((resolve, reject) => {
      this.userService.getUser().then(user => {
        console.log('Already logged in: ', user.email);
        this.router.navigate(['/home']);
        return resolve(false);
      }, err => {
        console.log('Not logged in. Redirecting to Login page.');
        return resolve(true);
      });
    });
  }

}
