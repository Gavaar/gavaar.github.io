//angular imports
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//my imports
import { GavHexagonContainerComponent } from "./gav-hexagon-container.component";

@NgModule({
    imports: [CommonModule],
    declarations: [GavHexagonContainerComponent],
    exports: [GavHexagonContainerComponent]
})
export class GavHexagonContainerModule { }