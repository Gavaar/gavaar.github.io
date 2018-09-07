//angular imports
import { NgModule } from '@angular/core';
//my components and modules
import { HomeRouterModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GavHexagonContainerModule } from 'my-libs/gav-hexagon-container/gav-hexagon-container.module';
import { GavTitleModule } from 'my-libs/gav-title/gav-title.module';

@NgModule({
    imports: [
        HomeRouterModule,
        GavHexagonContainerModule,
        GavTitleModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }