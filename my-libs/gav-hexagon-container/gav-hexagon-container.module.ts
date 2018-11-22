// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Local Imports
import { GavHexagonContainerComponent } from './gav-hexagon-container.component';

@NgModule({
    imports: [CommonModule],
    declarations: [GavHexagonContainerComponent],
    exports: [GavHexagonContainerComponent]
})
export class GavHexagonContainerModule { }
