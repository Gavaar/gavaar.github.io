// Angular Imports
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// Local Imports
import { GavOnboardSetting } from './gav-onboard';

@Component({
  selector: 'v-onboard',
  templateUrl: './v-onboard.component.html',
  styleUrls: ['./v-onboard.component.scss']
})
export class GavOnboardComponent implements OnInit {
  @Input() info: GavOnboardSetting[];

  @Output() close: EventEmitter<void> = new EventEmitter();

  tutorialIndex = 0;
  currentDisplay: GavOnboardSetting;

  ngOnInit() {
    this.changeDisplay();
  }

  changeDisplay() {
    this.currentDisplay = { ...this.info[this.tutorialIndex] };
  }

  onNext() {
    this.tutorialIndex += 1;
    if (this.info[this.tutorialIndex]) {
      this.changeDisplay();
    } else {
      this.onClose();
    }
  }

  onClose() {
    this.close.emit();
  }
}
