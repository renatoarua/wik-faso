
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTelaComponent } from './card-tela.component';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';


@NgModule({
    declarations: [ 
        CardTelaComponent
    ],
    exports: [
        CardTelaComponent
    ],
    imports: [
        CommonModule,
        DarkenOnHoverModule
    ],
    providers: [ 
        
    ]
})
export class CardTelaModule {}