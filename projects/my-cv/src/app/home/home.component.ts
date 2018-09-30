import { Component } from '@angular/core';
import * as homeConfig from './home.config';
import * as profileImg from '../../assets/profile.base64img';
import { Skill } from 'my-libs/gav-gear-list-display/gav-gear-list-display.model';

@Component({
    selector: 'cv-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent { 
    profileImg: string = profileImg.profileImg;
    basicInfo: string = homeConfig.basicInfo;
    skillList: Skill[] = homeConfig.skillList;
}
