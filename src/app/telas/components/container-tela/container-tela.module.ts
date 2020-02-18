
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerTelaComponent } from './container-tela.component';


@NgModule({
    declarations: [ 
        ContainerTelaComponent
    ],
    exports: [
        ContainerTelaComponent
    ],
    imports: [
        CommonModule,
    ],
    providers: [ 
        
    ]
})
export class ContainerTelaModule {}