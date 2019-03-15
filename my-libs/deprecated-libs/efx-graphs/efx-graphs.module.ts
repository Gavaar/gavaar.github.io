import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EquifaxSingleGraphComponent } from './efx-graph/efx-graph.component';
import { EquifaxGraphsComponent } from './efx-graphs.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EquifaxGraphsComponent, EquifaxSingleGraphComponent],
  exports: [EquifaxGraphsComponent],
})
export class EquifaxGraphsModule {}
