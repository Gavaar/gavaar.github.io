// Angular Imports
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
// Local Imports
import { GavNavbarComponent } from './gav-navbar.component';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule
    ],
    declarations: [
        GavNavbarComponent
    ],
    exports: [
        GavNavbarComponent
    ]
})
export class GavNavbarModule { }
