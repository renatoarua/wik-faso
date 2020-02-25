import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesenvolvimentoComponent } from './desenvolvimento/desenvolvimento.component';
import { InicioComponent } from './inicio/inicio.component';
import { MotivacionalComponent } from './motivacional/moticavional.component';
import { ContainerTelaComponent } from './components/container-tela/container-tela.component';
import { ContainerTelaModule } from './components/container-tela/container-tela.module';
import { TituloTelaModule } from './components/titulo-tela/titulo-tela.module';
import { FasoComponent } from './faso/faso.component';
import { CardTelaModule } from './components/card-tela/card-tela.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { HistoriasComponent } from './historias/historias.component';
import { ApresentacaoHistoriaComponent } from './historias/apresentaçãoHistoria/apresentacaoHistoria.component';



@NgModule({
    declarations: [ 
        DesenvolvimentoComponent,
        InicioComponent,
        MotivacionalComponent,
        FasoComponent,
        HistoriasComponent,
        ApresentacaoHistoriaComponent,
    ],
    imports: [
        CommonModule,
        ContainerTelaModule,
        TituloTelaModule,
        CardTelaModule,
        DarkenOnHoverModule
    ],
    providers: [ 
        
    ]
})
export class TelasModule {}