// ANGULAR IMPORTS
import { Component, Input, OnInit } from '@angular/core';
// LOCAL IMPORTS
import { Skills } from './gav-gear-list-display.model';
import { IconType } from './gav-gear-list-display.model';

@Component({
    selector: 'gav-gear-list-display',
    templateUrl: './gav-gear-list-display.component.html',
    styleUrls: ['./gav-gear-list-display.component.scss']
})
export class GavGearListDisplayComponent {

    readonly IconType = IconType;

    @Input()skillList: Skills;
}
