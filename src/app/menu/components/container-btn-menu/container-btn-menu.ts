import { Component } from '@angular/core';

@Component({
    selector: 'wf-container-btn-menu',
    template: `
        <ul class="nav flex-column text-center">
            <ng-content></ng-content>
        <ul>
    `
})
export class ContainerButtonMenuComponent { }