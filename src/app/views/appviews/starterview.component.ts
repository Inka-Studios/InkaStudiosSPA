import { AUTH_CONFIG } from './../../components/services/auth-constants';
import { AuthService } from './../../components/services/auth.service';
import { Component, OnDestroy, OnInit, } from '@angular/core';

@Component({
  selector: 'starter',
  templateUrl: 'starter.template.html'
})
export class StarterViewComponent implements OnDestroy, OnInit  {
  public nav:any;
  token: any = {};

  public constructor(
    private authService: AuthService
  ) {
    this.nav = document.querySelector('nav.navbar');
  }

  public ngOnInit():any {
    this.nav.className += " white-bg";
  }


  public ngOnDestroy():any {
    this.nav.classList.remove("white-bg");
  }

  getToken() {
    this.token.client_id = AUTH_CONFIG.client;
    this.token.client_secret = AUTH_CONFIG.secret;
    this.token.grant_type = AUTH_CONFIG.grants;
    this.token.scope = AUTH_CONFIG.scope;
    console.log(this.token);
    this.authService.getToken(this.token)
      .subscribe(res => {
        this.token = res;
        console.log(this.token);
      })
  }
}
