import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material'

const MaterialComponents = [
    MatSidenavModule,
]
@NgModule({
    imports: [
        MaterialComponents
    ],
    exports: [
        MaterialComponents
    ]
})
export class MaterialModule {}