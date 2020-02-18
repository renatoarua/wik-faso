import { Component } from '@angular/core';

@Component({
    selector: 'wf-container-tela',
    template: `
        <div class="container pt-3">
            <ng-content></ng-content>
        <div>
    `
})
export class ContainerTelaComponent { }