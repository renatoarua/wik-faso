import { Component, Input } from '@angular/core';

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

            <div *ngIf="!isMobile; else btnMenu">
                <i class="fa fa-user-circle mr-1"></i>
                <a class="mr-1">renato</a>
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
}