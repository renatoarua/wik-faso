import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material-module/material.module';
import { ButtonMenuConponent } from './components/button-menu/button-menu';
import { ContainerButtonMenuComponent } from './components/container-btn-menu/container-btn-menu';
import { MenuComponent } from './menu.component';
import { HeaderComponent } from './header/header.component';
import { TelasModule } from '../telas/telas.module';


@NgModule({
    declarations: [ 
        MenuComponent,
        ButtonMenuConponent,
        ContainerButtonMenuComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        TelasModule
    ],
    providers: [ 
        
    ]
})
export class MenuModule {}