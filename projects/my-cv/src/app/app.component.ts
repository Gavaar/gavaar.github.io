import { Component } from '@angular/core';
import * as profileImg from '../assets/profile.base64img';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-cv';
  profileImg: string = profileImg.profileImg;
}
