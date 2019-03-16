import { animate, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { gavContentExpanderAnimations } from '../gav-animations';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SidenavOption, SidenavOptions } from './gav-sidenav.models';

@Component({
  selector: 'gav-sidenav',
  templateUrl: './gav-sidenav.component.html',
  styleUrls: ['./gav-sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('enterLeave', [
      transition('void => *', [style({ transform: 'translateX(-100%)' }), animate(200)]),
      transition('* => void', [animate(200, style({ transform: 'translateX(-100%)' }))]),
    ]),
    gavContentExpanderAnimations,
  ],
})
export class GavSidenavComponent {
  @Input('config') sidenavOptions: SidenavOptions;
  @Output() onOptionClick: EventEmitter<string> = new EventEmitter();

  viewSidenav = true;
  desktopSidenav$: Observable<BreakpointState>;

  constructor(private bpObserver: BreakpointObserver) {
    const deviceWidth = this.bpObserver
      .observe(['(min-width: 1024px)'])
      .pipe(tap(bps => (this.viewSidenav = bps.matches)));

    this.desktopSidenav$ = deviceWidth as Observable<BreakpointState>;
  }

  sidenavFn = (index: number) => index;
  subfieldsFn = (index: number) => index;

  // Outputs
  onClick(option: SidenavOption, index: number): void {
    this.closeTabs(index);
    this.onOptionClick.emit(option.routerLink);
    if (this.bpObserver.isMatched('(max-width: 1023px)') && option.suboptions == null) {
      this.viewSidenav = false;
    }
  }

  onSuboptionClick(option: SidenavOption): void {
    if (this.bpObserver.isMatched('(max-width: 1023px)')) this.viewSidenav = false;
    this.onOptionClick.emit(option.routerLink);
  }

  // Privates
  private closeTabs(index: number): void {
    const fields = this.sidenavOptions.fields;

    fields.map((field, i) => {
      index === i ? (field['active'] = !field['active']) : (field['active'] = false);
      return field;
    });
  }
}
