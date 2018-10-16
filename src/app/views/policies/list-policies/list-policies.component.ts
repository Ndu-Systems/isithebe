import { SelectService } from './../../../shared/services/select.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Observable } from 'rxjs';
import { ACTIVE_POLICY_CODE } from '../../../shared/config';

@Component({
  selector: 'app-list-policies',
  templateUrl: './list-policies.component.html',
  styleUrls: ['./list-policies.component.scss'],
  animations: [routerTransition()]

})
export class ListPoliciesComponent implements OnInit {
policies$:Observable<any>=this.selectService.select(`policies`);
searchText:string;
p:any;
  constructor(private selectService:SelectService) { }

  ngOnInit() {
  }

}
