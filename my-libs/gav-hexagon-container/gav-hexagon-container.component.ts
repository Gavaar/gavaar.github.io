import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'gav-hexagon-container',
    templateUrl: './gav-hexagon-container.component.html',
    styleUrls: ['./gav-hexagon-container.component.scss'],
})
export class GavHexagonContainerComponent { 
    @Input()background: string;
}