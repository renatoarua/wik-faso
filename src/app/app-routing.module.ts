import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { DesenvolvimentoComponent } from './telas/desenvolvimento/desenvolvimento.component';
import { InicioComponent } from './telas/inicio/inicio.component';
import { MotivacionalComponent } from './telas/motivacional/moticavional.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './home/signin/signin.component';
import { LoginGuard } from './core/token/login.guard';
import { AuthGuard } from './core/token/auth.guard';
import { FasoComponent } from './telas/faso/faso.component';
import { TutoriaisComponent } from './telas/desenvolvimento/tutoriais/tutoriais.component';
import { TutorialDescricaoComponent } from './telas/desenvolvimento/tutoriais/tutorial-descricao/tutorial-descricao.component';
import { HistoriasComponent } from './telas/historias/historias.component';
import { ApresentacaoHistoriaComponent } from './telas/historias/apresentaçãoHistoria/apresentacaoHistoria.component';
import { FrasesComponent } from './telas/frases/frases.component';
import { PilaresComponent } from './telas/pilares/pilares.component';
import { componentFactoryName } from '@angular/compiler';
import { MissaoComponent } from './telas/missao/missao.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        component: SigninComponent
      }
    ]
  },
  {
    path: '',
    component: MenuComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'inicio'
      },
      {
        path: 'inicio',
        component: InicioComponent,
      },
      {
        path: 'desenvolvimento',
        component: DesenvolvimentoComponent,      
      },
      {
        path:'tutoriais',

        component: TutoriaisComponent,

      },
      {
        path:'t/:tutorialId',

        component: TutorialDescricaoComponent,
        
      },
      {
        path: 'motivacional',
        component: MotivacionalComponent,
      },
      {
        path: 'faso',
        component: FasoComponent,
      },
      {
        path: 'historias',
        component: HistoriasComponent,
        // children:[
        //   {
        //     path:'apresentacaoHistoria',
        //     component: ApresentacaoHistoriaComponent
        //   }
        // ]
      },
      {
        path: 'historias/:parametro',
        component: ApresentacaoHistoriaComponent
      },
      {
        path: 'frases',
        component: FrasesComponent
      },
      {
        path: 'pilares',
        component: PilaresComponent
      },
      {
        path:'missao',
        component: MissaoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
