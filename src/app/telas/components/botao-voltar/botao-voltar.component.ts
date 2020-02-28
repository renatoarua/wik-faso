import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'wf-botao-voltar',
    templateUrl: 'botao-voltar.component.html',

  
})
export class BotaoVoltarComponent {
    @Input() caminho:string;
    
    constructor(
        private router: Router

    ){}
    clickBotao(caminho){
        if(caminho)
        this.router.navigate([caminho])
        else
        this.router.navigate([history.go(-1)])
    }
}