import { Component } from '@angular/core';
import { HISTORIAS } from './apresentaçãoHistoria/arquivoHistorias';

@Component({
    templateUrl: 'historias.component.html',
   
})
export class HistoriasComponent {

    listaHistoria = HISTORIAS

}