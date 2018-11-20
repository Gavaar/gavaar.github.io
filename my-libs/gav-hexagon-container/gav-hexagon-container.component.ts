import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'gav-hexagon-container',
    template: `<div class="hex-out">
                    <div class="hex-mid">
                        <div class="hex-in" [ngStyle]="{'background': 'url(' + background + ')' }">
                            <!--image is passed through here-->
                        </div>
                    </div>
                </div>`,
    styleUrls: ['./gav-hexagon-container.component.scss'],
})
export class GavHexagonContainerComponent {
    @Input()background: string;
}
