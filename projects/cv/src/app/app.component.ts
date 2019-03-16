import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SidenavOptions } from 'my-libs/gav-sidenav/gav-sidenav.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Santorelli\'s Cv';
  dark = false;

  sidenavOptions: SidenavOptions = new SidenavOptions([
    {
      name: 'Who am I?',
      routerLink: '/',
      icon: 'face'
    },
    {
      name: 'More coming...',
      routerLink: '/under-construction',
      icon: 'build'
    }
  ])
}
