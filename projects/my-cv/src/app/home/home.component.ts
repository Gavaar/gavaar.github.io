import { Component } from '@angular/core';
import * as profileImg from '../../assets/profile.base64img';

@Component({
    selector: 'cv-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    profileImg: string = profileImg.profileImg;
 }