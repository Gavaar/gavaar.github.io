//angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//my components and modules
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GavNavbarModule } from 'my-libs/gav-navbar/gav-navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GavNavbarModule
  ],
  providers: [
    //empty so far
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
