// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { MatIconModule } from '@angular/material';
// LOCAL IMPORTS
import { HomeRouterModule } from './home-routing.module';
import { HomeComponent } from './home.component';
// LIBRARY IMPORTS
import { GavHexagonContainerModule } from 'my-libs/gav-hexagon-container/gav-hexagon-container.module';
import { GavTitleModule } from 'my-libs/gav-title/gav-title.module';
import { GavGearListDisplayModule } from 'my-libs/gav-gear-list-display/gav-gear-list-display.module';

@NgModule({
    imports: [
        HomeRouterModule,
        MatIconModule,
        GavHexagonContainerModule,
        GavTitleModule,
        GavGearListDisplayModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {
    constructor(sanitizer: DomSanitizer, iconRegistry: MatIconRegistry) {
        iconRegistry.addSvgIcon('angular', sanitizer.bypassSecurityTrustResourceUrl('../../assets/angular.svg'));
    }
}
