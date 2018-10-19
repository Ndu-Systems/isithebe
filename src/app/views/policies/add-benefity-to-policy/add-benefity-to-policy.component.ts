import { Benefit } from './../../../models/benefit/benefit';
import { PolicyService } from './../../../services/policy/policy.service';
import { Policy, IPolicyBenefit } from './../../../models/policy/policy';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { MenuItem } from '../../../models';
import { Observable } from 'rxjs';
import { Message, ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
import { SelectService } from '../../../shared';
import { SELECTED_POLICY, POLICY_BENEFIT_HOLDER_EXIST } from '../../../shared/config';

@Component({
  selector: 'app-add-benefity-to-policy',
  templateUrl: './add-benefity-to-policy.component.html',
  styleUrls: ['./add-benefity-to-policy.component.scss'],
  animations: [routerTransition()]

})
export class AddBenefityToPolicyComponent implements OnInit {
  policy:Policy;
  menus:Array<MenuItem>;
  benefits$:Observable<Array<any>>;
  msgs: Message[] = [];
  msg: string;
  constructor(
    private router:Router,
    private selectService : SelectService,
    private confirmationService: ConfirmationService,
    private policyService:PolicyService
  ) {
    let policy = localStorage.getItem(SELECTED_POLICY);

      if(!policy) this.router.navigate(['clients']);

      this.policy = JSON.parse(policy);
   }

  ngOnInit() {
    this.benefits$ = this.selectService.select(`benefits WHERE StatusId = 1`);

    this.menus = [
      {name:'Dashboard',url:'/dashboard'},
      {name:'Policies',url:'/policies',icon:'file'},
      {name:this.policy.Description,url:'/policies/view',icon:'user'},
    ];
  }
  add(benefit:Benefit){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        let data: IPolicyBenefit ={
          PolicyId: this.policy.PolicyId ,
          BenefitId:benefit.BenefitId,
          CreateUserId:'1',
          StatusId:1
        }
     
        this.policyService.addBenefitToApolicy(data)
        .subscribe(response=>{
          if (response === 1) {
            this.showSuccess();
            setTimeout(() => {
                this.router.navigate(["/policies/view"]);
            }, 2000);
        }
        if (response === POLICY_BENEFIT_HOLDER_EXIST) {
            this.showError("Benefit  holder alreay exists for this policy");
        }
        })
        
      }
  });
  }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({
        severity: "success",
        summary: "Success Message",
        detail: "Policy Holder Added Successfully"
    });
}
showError(msg) {
    this.msgs = [];
    this.msgs.push({
        severity: "warn",
        summary: "Validation Message",
        detail: `${msg}`
    });
}
}
