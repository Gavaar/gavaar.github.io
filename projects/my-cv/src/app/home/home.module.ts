// ANGULAR IMPORTS
import { NgModule } from '@angular/core';
// LOCAL IMPORTS
import { HomeRouterModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GavHexagonContainerModule } from 'my-libs/gav-hexagon-container/gav-hexagon-container.module';
import { GavTitleModule } from 'my-libs/gav-title/gav-title.module';
import { GavGearListDisplayModule } from 'my-libs/gav-gear-list-display/gav-gear-list-display.module';

@NgModule({
    imports: [
        HomeRouterModule,
        GavHexagonContainerModule,
        GavTitleModule,
        GavGearListDisplayModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }