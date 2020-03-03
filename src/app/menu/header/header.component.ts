import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/usuario/usuario.service';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/core/usuario/usuario';

@Component({
    selector: 'wf-header',
    template: `
    <div class="fixed-top shadow-sm">
        <nav class="navbar navbar-light bg-light">
    
            <a class="navbar-brand" routerLink="/inicio" style="widh: 155px">
                <img 
                    style="width: 155px !important;"
                    src="../assets/img/faso/lg-faso-azul-degrade.png">
            </a>

            <div *ngIf="!isMobile; else btnMenu" 
            
                (click)="logout()"
                style="cursor: pointer;">
                    <i class="fa fa-user-circle mr-1"></i>
                    <a class="mr-1">{{ nome }}</a>
                    <a>(Logout)</a>
            </div> 
            

            <ng-template #btnMenu>
                <ng-content></ng-content>
            </ng-template>

        </nav>
        
    </div>
    
    `
})
export class HeaderComponent {

    @Input() isMobile: boolean;
    nome: string;

    constructor(
        private router: Router,
        private usuarioService: UsuarioService,
    ) {
        this.nome = usuarioService.getUserName();
    }

    logout() {
        this.usuarioService.logout();
        this.router.navigate(['']);
    }
}