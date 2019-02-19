import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { GavaarFormConfig } from './gav-form.models';

@Component({
  selector: 'gav-form',
  templateUrl: './gav-form.component.html',
  styleUrls: ['./gav-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class GavaarFormComponent {
  @Input() formsConfig: GavaarFormConfig[];
  @Output() tabChange: EventEmitter<{ header: string; tab: number }> = new EventEmitter();

  onTabClick(field: GavaarFormConfig, tab: MatTabChangeEvent) {
    this.tabChange.emit({ header: field.header, tab: tab.index });
    field.forms[tab.index].formGroup.reset();
  }
}
