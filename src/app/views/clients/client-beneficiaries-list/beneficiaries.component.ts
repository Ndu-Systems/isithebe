import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../models';
import { SELECTED_CLIENT_BENEFICIARY } from '../../../shared/config';

@Component({
  selector: 'app-beneficiaries',
  templateUrl: './beneficiaries.component.html',
  styleUrls: ['./beneficiaries.component.scss']
})
export class BeneficiariesComponent implements OnInit {
@Input() beneficiaries:Array<any>;
@Input() client:User;
searchText: string;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  edit(client){
    localStorage.setItem(SELECTED_CLIENT_BENEFICIARY, JSON.stringify(client));
    this.router.navigate(['clients/edit-client-beneficiary']);
  }
}
