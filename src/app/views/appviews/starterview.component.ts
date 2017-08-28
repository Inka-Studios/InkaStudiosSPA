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
    this.authService.getToken(this.token)
      .subscribe(res => {
        this.token = res;
        console.log(this.token);
      })
  }
}
