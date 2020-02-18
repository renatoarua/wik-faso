import { Component, Input } from '@angular/core';

@Component({
    selector: 'wf-titulo-tela',
    template: `
        <h2 class="text-center" style="color: #023a55;">
            {{ titulo }}
        <h2>
    `
})
export class TituloTelaComponent {
    @Input() titulo: string;
 }