import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { AppComponent } from './app.component';
import { TenseService } from './services/tense.service';
import { authenticationService} from './services/authentication.service';


import { MDBBootstrapModule } from './../../angular-bootstrap-md';
import { AuthGuard } from './authentication/auth.guard';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { WritingComponent } from './writing/writing.component';
import { ReadingComponent } from './reading/reading.component';
import { HomeComponent } from './home/home.component';
import { EGrammarComponent } from './e-grammar/e-grammar.component';
import { HttpClientModule } from '@angular/common/http';
import {
  routes as childRoutes,
  tenses
} from './tense-details/tense-details.module';
import { TenseDetailsComponent } from './tense-details/tense-details.component';
import { APP_BASE_HREF } from '@angular/common';
import { TenseDetailComponent } from './e-grammar/tense-detail/tense-detail.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    WritingComponent,
    HeaderComponent,
    ReadingComponent,
    HomeComponent,
    EGrammarComponent,
    TenseDetailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    tenses
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue:'/'},
    AuthGuard,
    TenseService,
    authenticationService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
