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
<<<<<<< HEAD
import { TutoriaisComponent } from './desenvolvimento/tutoriais/tutoriais.component';
import { TutorialDescricaoComponent, SafePipe } from './desenvolvimento/tutoriais/tutorial-descricao/tutorial-descricao.component';
import { RouterModule } from '@angular/router';
=======
import { HistoriasComponent } from './historias/historias.component';
import { ApresentacaoHistoriaComponent } from './historias/apresentaçãoHistoria/apresentacaoHistoria.component';
import { FrasesComponent } from './frases/frases.component';
import { PilaresComponent } from './pilares/pilares.component';
import { MissaoComponent } from './missao/missao.component';
import { BotaoVoltarModule } from './components/botao-voltar/botao-voltar.module';
>>>>>>> b831813f2b0c5d84ca7a46b41017ea2f5bfe9253



@NgModule({
    declarations: [ 
        DesenvolvimentoComponent,
        InicioComponent,
        MotivacionalComponent,
        FasoComponent,
<<<<<<< HEAD
        TutoriaisComponent,
        TutorialDescricaoComponent,
        SafePipe
=======
        HistoriasComponent,
        ApresentacaoHistoriaComponent,
        FrasesComponent,
        PilaresComponent,
        MissaoComponent
>>>>>>> b831813f2b0c5d84ca7a46b41017ea2f5bfe9253
    ],
    imports: [
        CommonModule,
        ContainerTelaModule,
        TituloTelaModule,
        CardTelaModule,
        DarkenOnHoverModule,
<<<<<<< HEAD
        RouterModule
=======
        BotaoVoltarModule
>>>>>>> b831813f2b0c5d84ca7a46b41017ea2f5bfe9253
    ],
    providers: [ 
        
    ]
})
export class TelasModule {}