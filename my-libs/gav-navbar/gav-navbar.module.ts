// Angular Imports
import { NgModule } from '@angular/core';
// Local Imports
import { GavNavbarComponent } from './gav-navbar.component';

@NgModule({
    declarations: [
        GavNavbarComponent
    ],
    exports: [
        GavNavbarComponent
    ]
})
export class GavNavbarModule { }
