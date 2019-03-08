import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { EquifaxProduct } from './efx-product.models';

@Component({
  selector: 'efx-products',
  templateUrl: './efx-product.component.html',
  styleUrls: ['./efx-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class EquifaxProductComponent {
  @Input() config: EquifaxProduct[];
  @Output() productClick: EventEmitter<string> = new EventEmitter();

  onProductClick(url: string) {
    this.productClick.emit(url);
  }
}
