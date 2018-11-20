// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
// LOCAL IMPORTS
import { GavGearListDisplayComponent } from './gav-gear-list-display.component';
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
