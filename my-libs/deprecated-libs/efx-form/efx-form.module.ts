import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';
import { EfxFormFieldModule } from './efx-form-field/efx-form-field.module';
import { EquifaxFormComponent } from './efx-form.component';

@NgModule({
  imports: [CommonModule, EfxFormFieldModule, MatFormFieldModule, MatInputModule, MatTabsModule],
  declarations: [EquifaxFormComponent],
  exports: [EquifaxFormComponent],
})
export class EquifaxFormModule {}
