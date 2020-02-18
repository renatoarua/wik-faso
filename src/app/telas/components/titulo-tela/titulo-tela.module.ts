
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloTelaComponent } from './titulo-tela.component';


@NgModule({
    declarations: [ 
        TituloTelaComponent
    ],
    exports: [
        TituloTelaComponent
    ],
    imports: [
        CommonModule,
    ],
    providers: [ 
        
    ]
})
export class TituloTelaModule {}