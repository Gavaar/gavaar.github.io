//angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//my components and modules
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from 'my-libs/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule
  ],
  providers: [
    //empty so far
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
