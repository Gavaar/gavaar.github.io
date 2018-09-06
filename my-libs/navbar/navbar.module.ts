//angular imports
import { NgModule } from '@angular/core';
//my components and modules
import { NavbarComponent } from './navbar.component';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule { }