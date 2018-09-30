// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
// LOCAL IMPORTS
import { GavGearListDisplayComponent } from './gav-gear-list-display.component';
//NODE_MODULES IMPORTS
import { MatIconModule } from '@angular/material';

@NgModule({
    imports: [
        MatIconModule
    ],
    declarations: [GavGearListDisplayComponent],
    exports: [GavGearListDisplayComponent]
})
export class GavGearListDisplayModule { }