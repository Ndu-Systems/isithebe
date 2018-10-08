import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OurPoliciesComponent } from './our-policies.component';

const routes: Routes = [
  { path: '', component : OurPoliciesComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class OurPoliciesRoutes {}
