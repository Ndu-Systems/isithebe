import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineRegistrationComponent } from './online-registration.component';
  
const routes: Routes = [
    {
        path: '',
        component: OnlineRegistrationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class OnlineRegistrationRouting {}
