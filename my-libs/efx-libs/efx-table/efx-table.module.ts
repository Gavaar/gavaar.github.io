import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { EquifaxTableComponent } from './efx-table.component';

@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [EquifaxTableComponent],
  exports: [EquifaxTableComponent],
})
export class EquifaxTableModule {}
