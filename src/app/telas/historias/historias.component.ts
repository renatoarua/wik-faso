import { Component } from '@angular/core';
import { HISTORIAS } from './apresentaçãoHistoria/arquivoHistorias';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'historias.component.html',
   

})
export class HistoriasComponent {
constructor(
    private router:Router
    
){}
    listaHistoria = HISTORIAS


    clickCard(id){
        

this.router.navigate(['historias/'+id])
    }
        
    clickBotao() {
        this.router.navigate([history.go(-1)])

            }
}