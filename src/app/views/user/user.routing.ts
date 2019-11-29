import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePasswordComponent } from './change-password';
import { MyProfileComponent } from './my-profile';

const routes: Routes = [
    { path: 'profile/:id', component: MyProfileComponent}
];

export const declarations: Array<any> = [
    ChangePasswordComponent,
    MyProfileComponent
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRouting {
}
