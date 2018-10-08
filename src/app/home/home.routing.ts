import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
    { path: '', 
    component: HomeComponent ,
    children: [
        { path: '', redirectTo: 'index', pathMatch: 'prefix' },
        { path: 'index', loadChildren : './index/index.module#IndexModule'},
        { path: 'our-policies', loadChildren : './our-policies/our-policies-module#OurPoliciesModule'},

    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRouting { }