import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../models';

@Component({
  selector: 'app-beneficiaries',
  templateUrl: './beneficiaries.component.html',
  styleUrls: ['./beneficiaries.component.scss']
})
export class BeneficiariesComponent implements OnInit {
@Input() beneficiaries:Array<any>;
@Input() client:User;
  constructor(private router:Router) { }

  ngOnInit() {
  }
addBeneficiary(){
  this.router.navigate(['clients/add-client-beneficiary']);
}
}
