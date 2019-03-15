import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Chart } from 'chart.js';
import { EquifaxGraphConfig } from '../efx-graphs.models';

@Component({
  selector: 'efx-single-graph',
  templateUrl: './efx-graph.component.html',
  styleUrls: ['./efx-graph.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EquifaxSingleGraphComponent implements OnInit {
  @ViewChild('canvas') private canvas: ElementRef;

  @Input() graph: EquifaxGraphConfig;

  chartData: object;
  chart: Chart;
  opacity = false;

  ngOnInit() {
    const labels = Object.keys(this.graph.values);
    const values = labels.map(e => this.graph.values[e]);

    this.chartData = {
      type: 'doughnut',
      data: {
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: this.graph.colors,
            borderWidth: 0,
            hoverBorderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        legend: { display: false },
        maintainAspectRatio: true,
        cutoutPercentage: 85,
        tooltips: {
          enabled: true,
          bodyFontSize: 15,
          backgroundColor: '#2E3944',
          opacity: 0.99,
        },
      },
    };
  }

  ngAfterViewInit(): void {
    this.chart = new Chart(this.canvas.nativeElement.getContext('2d'), this.chartData);
  }
}
