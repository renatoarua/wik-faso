import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from './usuario';
import { TokenService } from '../token/token.service';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    private usuarioSubject = new BehaviorSubject<Usuario>(null);
    private nome: string;
    private email: string;
    private cpf: string;
    private id: number;

    constructor(private tokenService: TokenService) { 
        this.tokenService.hasToken() &&
            this.decodeAndNotify();
     }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.usuarioSubject.asObservable();
    }

    logout() {
        this.tokenService.removeToken();
        this.usuarioSubject.next(null);
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

    getUserName() {
        return this.nome;
    }

    getUserId() {
        return this.id;
    }

    private decodeAndNotify() {
        const usuario = this.tokenService.getToken() as unknown as Usuario;
        // const user = jwt_decode(token) as Usuario;
        this.nome = usuario.nome;
        this.id = usuario.id;
        this.email = usuario.email;
        this.cpf = usuario.cpf;
        this.usuarioSubject.next(usuario);
    }
}