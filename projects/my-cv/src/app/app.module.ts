// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// Local Imports
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GavNavbarModule } from 'my-libs/gav-navbar/gav-navbar.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    GavNavbarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
