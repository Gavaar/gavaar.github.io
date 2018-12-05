// Angular Imports
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
// Local Imports
import { GavOnboardComponent } from './gav-onboard.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [GavOnboardComponent],
  exports: [GavOnboardComponent]
})
export class GavOnboardModule {}
