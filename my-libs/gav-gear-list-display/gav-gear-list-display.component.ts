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

    showArrowCollapse: boolean = false;

    skillExpand(skill): void {
        skill.show = !skill.show;
        if (skill.show) this.showArrowCollapse = true;
        else { 
            this.skillList.skills.filter(skill => skill.show)[0] ? 
            this.showArrowCollapse = true : 
            this.showArrowCollapse = false
        };
    }

    collapseAll(): void {
        this.showArrowCollapse = false;
        this.skillList.skills.map(sk => sk.show = false);
    }
}
