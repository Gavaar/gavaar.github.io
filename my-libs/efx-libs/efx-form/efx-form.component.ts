import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { EquifaxFormConfig } from './efx-form.models';

@Component({
  selector: 'efx-form',
  templateUrl: './efx-form.component.html',
  styleUrls: ['./efx-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class EquifaxFormComponent {
  @Input() formsConfig: EquifaxFormConfig[];
  @Output() tabChange: EventEmitter<{
    header: string;
    tab: number;
  }> = new EventEmitter();

  formsConfigFn = (index, efxForm) => efxForm.header;
  tabFieldFn = (index, form) => form.title;

  onTabClick(field: EquifaxFormConfig, tab: MatTabChangeEvent) {
    this.tabChange.emit({ header: field.header, tab: tab.index });
    field.forms[tab.index].formGroup.reset();
  }
}
