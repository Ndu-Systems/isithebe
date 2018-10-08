import { OurPoliciesComponent } from './our-policies.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { OurPoliciesRoutes } from './our-policies.routing';

@NgModule({
    imports: [CommonModule,OurPoliciesRoutes, MDBBootstrapModule.forRoot()],
    declarations: [OurPoliciesComponent],
    schemas: [NO_ERRORS_SCHEMA],
    exports: [],
    providers: []
})



export class OurPoliciesModule {
}
