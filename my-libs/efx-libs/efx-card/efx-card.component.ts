import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { efxContentExpanderAnimations } from 'libs/efx-animations';
import { EquifaxCardConfig } from './efx-card.models';

/**
 * Component to create card-like views for equifax.
 *
 * @param config - of the type `EquifaxCardConfig`.
 *
 * any config that is put inside the `<efx-card></efx-card>` will be rendered inside
 *
 * if content inside is put as `<div class="EfxCard__extra-info"></div>` then,
 * that content will appear on the title right-hand area, and is an HTML element.
 *
 * example:
 *
 * ```html
 *  <efx-card [config]="{ title: 'my card', action: 'extend' }">
 *    <div>...my content goes here</div>
 *
 *    <button class="EfxCard__extra-info">extra button on top!</button>
 *  </efx-card>
 * ```
 */
@Component({
  selector: 'efx-card',
  templateUrl: './efx-card.component.html',
  styleUrls: ['./efx-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: efxContentExpanderAnimations,
})
export class EquifaxCardComponent implements OnInit {
  @Input() public config: EquifaxCardConfig;

  public show = true;

  ngOnInit() {
    if (this.config) this.show = !this.config.collapsed;
  }
}
