import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule, MatIconModule, MatTooltipModule } from '@angular/material';
import { EquifaxCardComponent } from './efx-card.component';

@NgModule({
  declarations: [EquifaxCardComponent],
  exports: [EquifaxCardComponent],
  imports: [CommonModule, MatIconModule, MatDividerModule, MatTooltipModule],
})
export class EquifaxCardModule {}
