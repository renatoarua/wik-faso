import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { DesenvolvimentoComponent } from './telas/desenvolvimento/desenvolvimento.component';
import { InicioComponent } from './telas/inicio/inicio.component';
import { MotivacionalComponent } from './telas/motivacional/moticavional.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './home/signin/signin.component';
import { LoginGuard } from './core/token/login.guard';
import { AuthGuard } from './core/token/auth.guard';


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
        path: 'motivacional',
        component: MotivacionalComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
