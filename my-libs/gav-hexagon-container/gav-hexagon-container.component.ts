import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'gav-hexagon-container',
    template: `<div class="Hexagon">
                    <div class="Hexagon__mid">
                        <div class="Hexagon__inner" [ngStyle]="{'background': 'url(' + background + ')' }">
                        </div>
                    </div>
                </div>`,
    styleUrls: ['./gav-hexagon-container.component.scss'],
})
export class GavHexagonContainerComponent {
    @Input() background: string;
}
