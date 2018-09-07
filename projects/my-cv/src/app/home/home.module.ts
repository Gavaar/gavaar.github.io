//angular imports
import { NgModule } from '@angular/core';
//my components and modules
import { HomeRouterModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GavNavbarModule } from 'my-libs/gav-navbar/gav-navbar.module';

@NgModule({
    imports: [
        HomeRouterModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }