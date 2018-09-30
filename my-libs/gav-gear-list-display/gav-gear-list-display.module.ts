// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// LOCAL IMPORTS
import { GavGearListDisplayComponent } from './gav-gear-list-display.component';
//NODE_MODULES IMPORTS
import { MatIconModule } from '@angular/material';
import { GearStyleComponent } from './gear-style/gear-style.component';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule
    ],
    declarations: [
        GavGearListDisplayComponent,
        GearStyleComponent
    ],
    exports: [GavGearListDisplayComponent]
})
export class GavGearListDisplayModule { }