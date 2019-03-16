import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SantorelliComponent } from "./santorelli.component";

const routes: Routes = [
  { path: '', component: SantorelliComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SantorelliRoutingModule { }