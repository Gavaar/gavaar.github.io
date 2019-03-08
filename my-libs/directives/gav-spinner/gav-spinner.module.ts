import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { EquifaxSpinnerDirective, EquifaxSpinnerDirectiveComponent } from './efx-spinner.directive';

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule],
  declarations: [EquifaxSpinnerDirective, EquifaxSpinnerDirectiveComponent],
  entryComponents: [EquifaxSpinnerDirectiveComponent],
  exports: [EquifaxSpinnerDirective],
})
export class EquifaxSpinnerModule {}
