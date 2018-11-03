import { Routes, RouterModule } from '@angular/router';
import { WritingComponent } from '../writing/writing.component';
import { ReadingComponent } from '../reading/reading.component';
import { HomeComponent } from '../home/home.component';
import { EGrammarComponent } from '../e-grammar/e-grammar.component';

import {IReadingDetailComponent} from '../reading/i-reading/i-reading-detail/i-reading-detail.component';
import { IReadingComponent } from '../reading/i-reading/i-reading.component';
import { IReadingMenuComponent } from "../reading/i-reading/i-reading-menu/i-reading-menu.component";

import { TenseDetailsComponent } from '../tense-details/tense-details.component';
import { AuthGuard } from '../authentication/auth.guard';
import {
    routes as childRoutes,
    tenses
} from '../tense-details/tense-details.module';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ElementaryComponent } from '../listening/elementary/elementary.component';
export const routes: Routes = [
    {path:'', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'home', component: HomeComponent},
    {path: 'writing', component: WritingComponent, canActivate: [AuthGuard]},
    {path: 'e-grammar', component: EGrammarComponent, canActivate: [AuthGuard]},
    {path: 'reading', component: ReadingComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'listen-elementary', component: ElementaryComponent},
    {path: 'i-reading-detail/:lesson/:id', component: IReadingDetailComponent, canActivate: [AuthGuard]},
    {path: 'i-reading', component: IReadingComponent},
    {path: "i-reading-menu/:id", component: IReadingMenuComponent},


    {
        path: 'tenseDetails/:name', 
        component: TenseDetailsComponent,
        children: childRoutes
    }
];
export const routing = RouterModule.forRoot(routes);