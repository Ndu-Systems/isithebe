import { BenefitsListComponent } from './benefits-list/benefits-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BenefitsComponent } from './benefits.component';
import { AddBenefitComponent } from './add-benefit/add-benefit.component';
import { EditBenefitComponent } from './edit-benefit';

const routes: Routes = [
    { path: '', component: BenefitsListComponent },
    { path: 'add', component: AddBenefitComponent },
    { path: 'edit/:id', component: EditBenefitComponent },
];

export const declarations = [BenefitsComponent, EditBenefitComponent, BenefitsListComponent, AddBenefitComponent];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class BenefitsRoutes {

}
