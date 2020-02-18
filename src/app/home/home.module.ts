import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';


@NgModule({
    declarations: [
        HomeComponent,
        SigninComponent
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        VmessageModule
    ],
    providers: [
        
    ]
})
export class HomeModule {}