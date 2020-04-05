import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUser(): Promise<firebase.User> {
    return new Promise<firebase.User>((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          reject('No user logged in');
        }
      });
    });
  }
}
