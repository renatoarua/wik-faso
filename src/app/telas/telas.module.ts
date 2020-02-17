import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesenvolvimentoComponent } from './desenvolvimento/desenvolvimento.component';
import { InicioComponent } from './inicio/inicio.component';
import { MotivacionalComponent } from './motivacional/moticavional.component';


@NgModule({
    declarations: [ 
        DesenvolvimentoComponent,
        InicioComponent,
        MotivacionalComponent
    ],
    imports: [
        CommonModule,
    ],
    providers: [ 
        
    ]
})
export class TelasModule {}