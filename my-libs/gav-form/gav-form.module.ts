import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';
import { GavFormFieldModule } from './gav-form-field/gav-form-field.module';
import { GavaarFormComponent } from './gav-form.component';

@NgModule({
  imports: [CommonModule, GavFormFieldModule, MatFormFieldModule, MatInputModule, MatTabsModule],
  declarations: [GavaarFormComponent],
  exports: [GavaarFormComponent],
})
export class GavaarFormModule {}
