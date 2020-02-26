import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Historia } from './Historia.model';

import { HISTORIAS } from '../apresentaçãoHistoria/arquivoHistorias';

@Component({
    templateUrl: 'apresentacaoHistoria.component.html'
})
export class ApresentacaoHistoriaComponent implements OnInit {
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) { }

    listaHistoria = HISTORIAS
    apresentacaoHistoria;
    ngOnInit() {
        const par = this.activatedRoute.snapshot.paramMap.get('parametro');
        this.listaHistoria = this.listaHistoria.filter(c => c.idHistoria == parseInt(par));
        debugger
        if (this.listaHistoria.length==0) {
            this.router.navigate(['historias'])
            
        }
        this.apresentacaoHistoria = this.listaHistoria[0]


        console.log(this.apresentacaoHistoria);

        // var historias: Historia[] = HISTORIAS;

        // console.log(historias)
    }

    BotaoVoltar() {
this.router.navigate(['/historias'])
    }


} 