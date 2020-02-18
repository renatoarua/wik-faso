import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';


@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate{
    
    constructor(
        private userService: UsuarioService,
        private router: Router
        ) {}
    
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot)
        : boolean | Observable<boolean> | Promise <boolean> {
            
            if(!this.userService.isLogged()) {
                this.router.navigate(['']);
                return false;
            }
            return true;
    }
}