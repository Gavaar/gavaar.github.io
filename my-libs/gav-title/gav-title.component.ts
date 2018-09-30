import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'gav-title',
    templateUrl: './gav-title.component.html',
    styleUrls: ['gav-title.component.scss']
})
export class GavTitleComponent implements OnInit {
    @Input()title: string;
    words: string[];

    ngOnInit() {
        this.words = this.title.split(" ");
    }
 }
