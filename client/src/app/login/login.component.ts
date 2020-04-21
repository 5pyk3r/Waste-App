import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import {BasicAuthenticationService} from '../service/basic-authentication.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // two way binding with ngModel in login.html
  username = '';
  password = '';

  showLoginError = false;
  loginErrorMessage = 'Nieprawidłowy login lub hasło. Zaloguj się ponownie.';

  showAlreadyLoggedError = false;
  alreadyLoggedErrorMessage = 'Błąd! Jesteś już zalogowany! ';

  constructor(private router: Router,
              private hardcodedAuthService: HardcodedAuthenticationService,
              private basicAuthenticationService: BasicAuthenticationService) {
  }

  ngOnInit() {

  }


  login() {
    if (this.hardcodedAuthService.authenticate(this.username, this.password)) {
      this.router.navigate(['admin']);
      this.showLoginError = false;
    } else {
      this.showLoginError = true;
    }
  }

  basicAuthLogin() {
    if (this.basicAuthenticationService.isUserLoggedIn()) {
        this.showAlreadyLoggedError = true;
        setTimeout(() => { this.router.navigate(['admin']);}, 1500);
    } else {
      this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['admin']);
            this.showLoginError = false;
          },
          error => {
            console.log(error);
            this.showLoginError = true;
          });
    }
  }


}


