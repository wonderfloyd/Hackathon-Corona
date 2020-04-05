import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { auth } from 'firebase';

import { Login } from '../../../types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  login: Login = (user, successCb, failedCb) => {
    console.log('logging in: ', user.email);
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(successCb, failedCb);
  }

  logout = (): void => {
    firebase.auth().signOut()
      .then(() => console.log('Logging out!'))
      .catch(err => console.warn('Unable to logout: ', err));
  }

  register = async (email: string, password: string): Promise<auth.UserCredential> => {
    try {
      const register = await firebase.auth().createUserWithEmailAndPassword(email, password);
      if (register) {
        return register;
      }
    } catch (err) {
      if (err) {
        throw Error(err);
      }
    }
  }
}
