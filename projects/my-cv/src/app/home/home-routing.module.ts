//angular imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//my components and modules
import { HomeComponent } from './home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRouterModule { }