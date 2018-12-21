import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { GavSidenavComponent } from './gav-sidenav.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, LayoutModule],
  declarations: [GavSidenavComponent],
  exports: [GavSidenavComponent],
})
export class GavSidenavModule {}
