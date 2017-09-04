import { AuthService } from './../../components/services/auth.service';
import { SERV_CONFIG } from './../../components/services/service-constants';
import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: 'login.template.html'
})
export class LoginComponent {
  credentials: any = {};
  response: any = {};

  constructor( private authService: AuthService ) {}

  login() {
    this.credentials.clientId = SERV_CONFIG.ClientId;
    this.authService.getToken(this.credentials)
      .subscribe(res => {
        this.response = res;
        console.log(this.response);
      });
  }
}
