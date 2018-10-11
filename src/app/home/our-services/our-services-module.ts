 import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { OurServicesComponent } from "./our-services.component";
import { OurServicesRouting } from "./our-services.routing";
 
@NgModule({
    imports: [CommonModule,OurServicesRouting, MDBBootstrapModule.forRoot()],
    declarations: [OurServicesComponent],
    schemas: [NO_ERRORS_SCHEMA],
    exports: [],
    providers: []
})


export class OurServicesModule {}
