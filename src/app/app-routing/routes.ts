import { Routes } from '@angular/router';
import { WritingComponent } from '../writing/writing.component';
import { ReadingComponent } from '../reading/reading.component';
import { HomeComponent } from '../home/home.component';
import { EGrammarComponent } from '../e-grammar/e-grammar.component';
import { TenseDetailsComponent } from '../tense-details/tense-details.component';
import {
    routes as childRoutes,
    tenses
} from '../tense-details/tense-details.module';
import { LoginComponent } from '../login/login.component';
export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'writing', component: WritingComponent},
    {path: 'e-grammar', component: EGrammarComponent},
    {path: 'reading', component: ReadingComponent},
    {path: 'login', component: LoginComponent},
    {
        path: 'tenseDetails/:name', 
        component: TenseDetailsComponent,
        children: childRoutes
    }
    
];