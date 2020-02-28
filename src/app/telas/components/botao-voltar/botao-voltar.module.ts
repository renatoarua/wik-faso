
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BotaoVoltarComponent } from './botao-voltar.component';


@NgModule({
    declarations: [ 
        BotaoVoltarComponent
    ],
    exports: [
        BotaoVoltarComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [ 
        
    ]
})
export class BotaoVoltarModule {
}