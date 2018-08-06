import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
 
import {UserService } from '../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
 
@Component({templateUrl: 'register.component.html'})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    existEmail = false;
    error = false;
 
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService: UserService,
        ) { }
 
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            username: ['', Validators.required],
            email: ['',Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
 
    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
 
    onSubmit() {
        this.submitted = true;
 
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
 
        this.loading = true;
        
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    if(data.status === 'false' && data.message.email === 'false'){
                      this.existEmail = true;
                      this.loading = false;
                    }
                    else if(data.message.email === 'notchecked'){
                      this.error = true;
                      this.loading = false;
                    }else{
                      this.router.navigate(['/login']);
                    }   
                },
                error => {
                    this.loading = false;
                });
    }
}