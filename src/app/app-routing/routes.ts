import { Routes, RouterModule } from '@angular/router';
import { WritingComponent } from '../writing/writing.component';
import { ReadingComponent } from '../reading/reading.component';
import { HomeComponent } from '../home/home.component';
import { EGrammarComponent } from '../e-grammar/e-grammar.component';
import { TenseDetailsComponent } from '../tense-details/tense-details.component';
import { AuthGuard } from '../authentication/auth.guard';
import {
    routes as childRoutes,
    tenses
} from '../tense-details/tense-details.module';
import { LoginComponent } from '../login/login.component';
export const routes: Routes = [
    {path:'', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'home', component: HomeComponent},
    {path: 'writing', component: WritingComponent, canActivate: [AuthGuard]},
    {path: 'e-grammar', component: EGrammarComponent, canActivate: [AuthGuard]},
    {path: 'reading', component: ReadingComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {
        path: 'tenseDetails/:name', 
        component: TenseDetailsComponent,
        children: childRoutes
    }
];
export const routing = RouterModule.forRoot(routes);