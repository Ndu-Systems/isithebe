import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import { PageHeaderModule, PrimeNg } from '../shared';
import { NavBarComponent } from './nav-bar';
   

@NgModule({
    imports: [CommonModule, FormsModule, Ng2SearchPipeModule, ...PrimeNg, NgxPaginationModule,
        ReactiveFormsModule, PageHeaderModule, HomeRouting, MDBBootstrapModule.forRoot()],
    declarations: [HomeComponent, NavBarComponent],
    schemas: [ NO_ERRORS_SCHEMA ],
    exports: [...PrimeNg],
    providers: [ ]
})

export class HomeModule {}