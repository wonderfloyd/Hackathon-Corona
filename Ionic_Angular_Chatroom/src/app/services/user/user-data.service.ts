import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../types';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private router: Router, public userService: UserService) { }

  resolve(): Promise<User> {
    const user: User = {uid: '', email: '', name: ''};
    return new Promise((resolve, reject) => {
      this.userService.getUser().then(res => {
        user.email = res.email;
        user.uid = res.uid;
        user.name = user.email.match(/.*?(?=@|$)/i)[0];
        return resolve(user);
      }, err => {
        alert('Please login');
        console.log('UserDataService rejected: ', err);
        this.router.navigate(['/auth']);
        return reject(err);
      });
    });
  }
}
