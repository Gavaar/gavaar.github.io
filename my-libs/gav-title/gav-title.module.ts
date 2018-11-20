// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// My Imports
import { GavTitleComponent } from './gav-title.component';


@NgModule({
    imports: [CommonModule],
    declarations: [GavTitleComponent],
    exports: [GavTitleComponent]
})
export class GavTitleModule { }
