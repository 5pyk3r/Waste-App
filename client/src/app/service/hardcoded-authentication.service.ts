import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor(private router: Router) { }

  authenticate(username, password) {
    if (username === 'admin' && password === 'admin') {
      // Session Storage items:   key   /  value
      sessionStorage.setItem('authUser', username);

      return true;
    } else {
      return false;
    }
  }


  isUserLoggedIn() {
    const user = sessionStorage.getItem('authUser');
    if (user === null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    sessionStorage.removeItem('authUser');
  }
}
