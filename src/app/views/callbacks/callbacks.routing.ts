
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListCallbacksComponent } from './list-callbacks';

const routes: Routes = [
  { path:'', component: ListCallbacksComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CallbacksRoutes {}
