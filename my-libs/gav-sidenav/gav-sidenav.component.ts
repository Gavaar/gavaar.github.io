import { animate, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SidenavOption, SidenavOptions } from './gav-sidenav.models';

@Component({
  selector: 'gav-sidenav',
  templateUrl: './gav-sidenav.component.html',
  styleUrls: ['./gav-sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // tslint:disable-next-line: use-view-encapsulation
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('enterLeave', [
      transition('void => *', [style({ transform: 'translateX(-100%)' }), animate(200)]),
      transition('* => void', [animate(200, style({ transform: 'translateX(-100%)' }))]),
    ]),
  ],
})
export class GavaarSidenavComponent {
  @Input() sidenavOptions: SidenavOptions;
  @Output() onOptionClick: EventEmitter<SidenavOption> = new EventEmitter();

  viewSidenav = true;
  desktopSidenav$: Observable<BreakpointState>;

  sidenavFn = (index: number) => index;
  suboptionsFn = (index: number) => index;

  constructor(private bpObserver: BreakpointObserver) {
    const deviceWidth = this.bpObserver
      .observe(['(min-width: 1024px)'])
      .pipe(tap(bps => (this.viewSidenav = bps.matches)));

    this.desktopSidenav$ = deviceWidth as Observable<BreakpointState>;
  }

  // Outputs
  onClick(option: SidenavOption, index: number): void {
    this.closeTabs(index);
    this.onOptionClick.emit(option);
  }

  onSuboptionClick(option: SidenavOption): void {
    this.onOptionClick.emit(option);
  }

  // Privates
  private closeTabs(index: number): void {
    const fields = this.sidenavOptions.fields;

    fields.map((field, i) => {
      index === i ? (field.active = !field.active) : (field.active = false);
      return field;
    });
  }
}
