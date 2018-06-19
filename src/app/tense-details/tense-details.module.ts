import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    RouterModule,
    ActivatedRoute,
    Router,
    Routes
} from '@angular/router';

import { TenseDetailsComponent } from './tense-details.component';
import { PracticesComponent } from './practices/practices.component';
import { VideosComponent } from './videos/videos.component';

export const routes: Routes = [
    {path: '', redirectTo: 'videos', pathMatch: 'full'},
    {path: 'videos', component: VideosComponent },
    {path: 'practices', component: PracticesComponent},
];

@NgModule({
    declarations: [
        TenseDetailsComponent,
        PracticesComponent,
        VideosComponent
    ],
    exports: [
        TenseDetailsComponent,
        PracticesComponent,
        VideosComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class tenses{}