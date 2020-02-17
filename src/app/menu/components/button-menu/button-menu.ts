import { Component, Input } from '@angular/core';

@Component({
    selector: 'wf-btn-menu',
    template: `
        <li class="nav-item wf-li pt-2 pb-2">
            <a class="nav-link" [routerLink]="link">
                <div>
                    <span>
                        <i [class]="classIcon"></i>
                    </span>
                </div>
                <span>{{ name }}</span>
            </a>
        </li>
    `,
    styles: [`
        .wf-li {
            border-bottom: 1px solid #eaeaea;
        }

        .wf-li a{
            color: #eaeaea !important;
        }
    `]
})
export class ButtonMenuConponent {

    @Input() name: string;
    @Input() link: string; 
    @Input() classIcon: string; 
}