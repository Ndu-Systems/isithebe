import { Router } from '@angular/router';
import { SelectService } from './../../../shared/services/select.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { ACTIVE_POLICY_CODE, SELECTED_POLICY } from '../../../shared/config';
import { Policy } from '../../../models/policy/policy';

@Component({
  selector: 'app-list-policies',
  templateUrl: './list-policies.component.html',
  styleUrls: ['./list-policies.component.scss'],
  animations: [routerTransition()]

})
export class ListPoliciesComponent implements OnInit {
policies$:Observable<Array<Policy>>=this.selectService.select(`policies`);
searchText:string;
p:any;
  constructor(private selectService:SelectService,private router:Router) { }

  ngOnInit() {
  }
  view(item:Policy){
    localStorage.setItem(SELECTED_POLICY,JSON.stringify(item))
    this.router.navigate([`policies/view`])
  }
}
