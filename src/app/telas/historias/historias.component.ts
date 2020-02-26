import { Component } from '@angular/core';
import { HISTORIAS } from './apresentaçãoHistoria/arquivoHistorias';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'historias.component.html',
    styles: [`
    .wf-align-vertical {
        margin-top: auto;
        margin-bottom: auto;        
    }
`] 

})
export class HistoriasComponent {
constructor(
    private router:Router
){}
    listaHistoria = HISTORIAS

    clickCard(id){
this.router.navigate(['historias/'+id])
    }
}