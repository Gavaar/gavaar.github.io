import { animate, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { SidenavOption, SidenavOptions } from './gav-sidenav.models';

@Component({
  selector: 'efx-sidenav',
  templateUrl: './efx-sidenav.component.html',
  styleUrls: ['./efx-sidenav.component.scss'],
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
export class GavSidenavComponent {
  @Input() sidenavOptions: SidenavOptions;
  @Output() onOptionClick: EventEmitter<SidenavOption> = new EventEmitter();

  desktopSidenav: Observable<BreakpointState>;
  viewSidenav = true;

  constructor(private bpObserver: BreakpointObserver) {
    const deviceWidth = this.bpObserver
      .observe(['(min-width: 1024px)'])
      .pipe(tap(bps => (this.viewSidenav = bps.matches)));

    this.desktopSidenav = deviceWidth as Observable<BreakpointState>;
  }

  onClick(option): void {
    const shouldOpen = !option.active;
    this.closeTabs();
    if (shouldOpen) option.active = true;
    this.onOptionClick.emit(option);
  }

  onSuboptionClick(option): void {
    this.onOptionClick.emit(option);
  }

  private closeTabs(): void {
    this.sidenavOptions.fields = this.sidenavOptions.fields.map(field => {
      field.active = false;
      return field;
    });
  }
}
