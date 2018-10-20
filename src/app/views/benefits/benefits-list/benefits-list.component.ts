import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SelectService } from '../../../shared';
import { Benefit } from '../../../models/benefit/benefit';
import { MenuItem } from '../../../models/header/MenuItem';
 
@Component({
  selector: 'app-benefits-list',
  templateUrl: './benefits-list.component.html',
  styleUrls: ['./benefits-list.component.scss'],
  animations: [routerTransition()]
})
export class BenefitsListComponent implements OnInit {

  benefits$ : Observable<Array<Benefit>>=this.selectService.select(`benefits`);
  searchText:string;
  p:any;
  menus:Array<MenuItem>;
  
  constructor(private selectService:SelectService,private router:Router) { }

  ngOnInit() {
    this.menus = [
      {name:'Dashboard',url:'/dashboard'},
    ];
  }

  edit(benefit:Benefit){
    this.router.navigate(['/benefits/edit', benefit.BenefitId]);
  }
  
}
