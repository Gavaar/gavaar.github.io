// ANGULAR IMPORTS
import { Component, Input } from '@angular/core';
// LOCAL IMPORTS
import { Skill } from './gav-gear-list-display.model';
import { IconType } from './gav-gear-list-display.model';

@Component({
    selector: 'gav-gear-list-display',
    templateUrl: './gav-gear-list-display.component.html',
    styleUrls: ['./gav-gear-list-display.component.scss']
})
export class GavGearListDisplayComponent {

    readonly IconType = IconType;

    @Input()skillList: Skill[];

    numberToArray(num) {
        const someArr = [];
        for (let i = 0; i < num; i++) {
            someArr.push(i);
        }
        return someArr;
    }

}
