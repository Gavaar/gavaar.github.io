import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { EquifaxTableConfig } from './efx-table.models';

@Component({
  selector: 'efx-table',
  templateUrl: './efx-table.component.html',
  styleUrls: ['./efx-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EquifaxTableComponent {
  @Input() tableData: EquifaxTableConfig;
  @Output() rowClick: EventEmitter<{
    [name: string]: string | number | boolean | Date;
  }> = new EventEmitter();

  columnFn = index => index;

  onRowClick(row: { [name: string]: string | number | boolean | Date }) {
    this.rowClick.emit(row);
  }
}
