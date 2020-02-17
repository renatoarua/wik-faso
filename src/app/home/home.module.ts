import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
    declarations: [
        HomeComponent,
        SigninComponent
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule
    ],
    providers: [
        
    ]
})
export class HomeModule {}