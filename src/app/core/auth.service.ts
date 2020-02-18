import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private usuarioService: UsuarioService 
        ) {}

    authenticate(authUser: any) {
        return this.http
                .post(environment.apiURL + 'authUser', authUser)
                .pipe(tap(res => {
                    const authToken = JSON.stringify(res);
                    this.usuarioService.setToken(authToken);
            }));
    }
}