import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'gear-style',
    template: `
    <div class="parent">
    <div class="gear">
      <div class="center"><ng-content></ng-content></div>
      <div class="tooth"></div>
      <div class="tooth"></div>
      <div class="tooth"></div>
      <div class="tooth"></div>
    </div>  
  </div>
  `,
  styleUrls: ['./gear-style.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GearStyleComponent { }