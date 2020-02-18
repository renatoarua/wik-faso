import { Component, Input } from '@angular/core';

@Component({
    selector: 'wf-card-tela',
    templateUrl: 'card-tela-component.html',
    styles: [`
        .wf-align-vertical {
            margin-top: auto;
            margin-bottom: auto;        
        }
    `]
})
export class CardTelaComponent { 

    @Input() srcImg: string;
    @Input() titulo: string;
    @Input() link: string;
}