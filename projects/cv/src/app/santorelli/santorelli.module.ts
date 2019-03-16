import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SantorelliComponent } from "./santorelli.component";
import { SantorelliRoutingModule } from "./santorelli-routing.module";
import { MatIconModule } from "@angular/material";

@NgModule({
  imports: [CommonModule, SantorelliRoutingModule, MatIconModule],
  declarations: [SantorelliComponent],
})
export class SantorelliModule { }