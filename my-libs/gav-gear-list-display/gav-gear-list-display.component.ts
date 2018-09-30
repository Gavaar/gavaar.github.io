// ANGULAR IMPORTS
import { Component, Input } from '@angular/core';
// LOCAL IMPORTS
import { Skill } from './gav-gear-list-display.model';

@Component({
    selector: 'gav-gear-list-display',
    templateUrl: './gav-gear-list-display.component.html',
    styleUrls: ['./gav-gear-list-display.component.scss']
})
export class GavGearListDisplayComponent {
    
    @Input()skillList: Skill[];
}