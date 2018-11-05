import { Component, OnInit } from '@angular/core';
import { authenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  a: {};
  login: boolean;
  logout: boolean;
  constructor(private auth: authenticationService) { }

  ngOnInit() {
    debugger;
    if(localStorage.getItem('currentUser')){
      this.a = JSON.parse(localStorage.getItem('currentUser'));
      if(this.a['status'] === "OK"){
        this.login = true;
      }else{
        this.logout = true;
        this.auth.logout();
      }
    }else{
      this.logout = true;
    }
  }

}
