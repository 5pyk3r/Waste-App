import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  // authenticate(username, password) {
  //   if (username === 'admin' && password === 'admin') {
  //     //Session Storage items:   key   /  value
  //     sessionStorage.setItem('authUser', username);
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // isUserLoggedIn() {
  //   let user = sessionStorage.getItem('authUser');
  //   if(user === null) {
  //     return false;
  //   }else {
  //     return true;
  //   }
  // }

  executeAuthenticationService(username, password) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
    });

    return this.http.get<AuthenticationBean>(
      `/basicauth`,
      {headers}).pipe(
        map(
          data => {
            sessionStorage.setItem('authUser', username);
            sessionStorage.setItem('token', basicAuthHeaderString);
            return data;
          }
        )
    );

  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authUser');
  }

  getAuthenticatedToken() {
    if(this.getAuthenticatedUser())
      return sessionStorage.getItem('token');
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authUser');
    sessionStorage.removeItem('token');
  }

}
export class AuthenticationBean {
  constructor(public message: string) {
  }
}
