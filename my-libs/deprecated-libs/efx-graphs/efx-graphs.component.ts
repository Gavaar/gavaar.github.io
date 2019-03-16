import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { EquifaxGraphConfig } from './efx-graphs.models';

@Component({
  selector: 'efx-graphs',
  templateUrl: './efx-graphs.component.html',
  styleUrls: ['./efx-graphs.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EquifaxGraphsComponent implements OnInit {
  @Input() graphs: EquifaxGraphConfig[];

  keys: string[];

  colors = ['#3FAE29', '#94348C', '#E70033', '#0093C9', '#FF661B', '#2E3944', '#5F6A72'];

  ngOnInit() {
    this.graphs.forEach((graph: EquifaxGraphConfig) => {
      graph['colors'] = this.colors;
    });

    this.keys = Object.keys(this.graphs[0].values);
  }

  graphFn = index => index;
}
