import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { UsuarioService } from '../core/usuario/usuario.service';

@Component({
    templateUrl: 'menu.component.html',
    styles: [`
        mat-sidenav-container  {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }    

        mat-sidenav  {
            background-color: #0d2048;
        }   
      `]
})
export class MenuComponent implements OnDestroy {

    mobileQuery: MediaQueryList;
    private _mobileQueryListener: () => void;

    constructor(
        private router: Router,
        private usuarioService: UsuarioService,
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher
    ) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    logout() {
        this.usuarioService.logout();
        this.router.navigate(['']);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}