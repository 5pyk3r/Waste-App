import { Component, OnInit } from '@angular/core';
import {HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  logoutMessage = 'Zostałeś wylogowany i za chwilę zostaniesz automatycznie przekierowany na stronę głowną.';

  constructor(private router: Router, private hardcodedAuthService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
    //delete user from session
    this.hardcodedAuthService.logout();
    //after 2 seconds redirecting to home page
    setTimeout(() =>
      { this.router.navigate(['/']);}, 1500);

  }

}
