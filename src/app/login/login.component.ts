import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { authenticationService } from '../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  usernameError = false;
  passwordError = false;
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: authenticationService
  ) { }

  ngOnInit() {
    this.authenticationService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(){
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          if(data.message.username === 'false' && data.message.password === 'true'){
            this.loading = false;
            this.usernameError = true;
            this.passwordError = false;
          }
          else if(data.message.username === 'true' && data.message.password === 'false'){
            this.loading = false;
            this.usernameError = false;
            this.passwordError = true;
          }else{
            this.router.navigate([this.returnUrl]);
          }
          
        },
        error => {
          this.loading = false;
        }
      )
  }

}
