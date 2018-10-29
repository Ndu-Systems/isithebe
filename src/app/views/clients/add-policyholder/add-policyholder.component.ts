import { ClientService } from './../../../services/client/client.service';
import { Policy } from './../../../models/policy/policy';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { MenuItem } from '../../../models/header/MenuItem';
import { SELECTED_CLIENT, POLICY_HOLDER_EXIST, CURRENT_LOGGED_IN_USER, loadScreen, stopLoadingScreen } from '../../../shared/config';
import { Router } from '@angular/router';
import { SelectService } from '../../../shared';
import { User } from '../../../models/user/User';
import { Observable } from 'rxjs';
import { ConfirmationService, Message } from 'primeng/api';
import { IPolicyholder } from '../../../models/policyholder/policyholder';

@Component({
  selector: 'app-add-policyholder',
  templateUrl: './add-policyholder.component.html',
  styleUrls: ['./add-policyholder.component.scss'],
  animations: [routerTransition()]

})
export class AddPolicyholderComponent implements OnInit {
  menus:Array<MenuItem>;
  client:User;
  policies$:Observable<Array<any>>;
  msgs: Message[] = [];
  msg: string;
  searchText: string;
  p:any;
  loadingBenefits:any;
  loggedinUser:any;
  constructor(
    private router:Router,
    private selectService : SelectService,
    private confirmationService: ConfirmationService,
    private clientService:ClientService
  ) {
    let client = localStorage.getItem(SELECTED_CLIENT);

      if(!client) this.router.navigate(['clients']);

      this.client = JSON.parse(client);  

      // user 
      let currentUser = localStorage.getItem(CURRENT_LOGGED_IN_USER);
      if(!currentUser) this.router.navigate(['login']);
      this.loggedinUser =JSON.parse(currentUser);
   }

  ngOnInit() {
    this.policies$ = this.clientService.getPolicies();

    this.menus = [
      {name:'Dashboard',url:'/dashboard'},
      {name:'Clients',url:'/clients'},
      {name:this.client.FirstName,url:'/clients/view',icon:'user'},
    ];
  }
  add(policy:Policy){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        let data: IPolicyholder ={
          PolicyId:policy.PolicyId,
          UserId:this.client.UserId,
          PolicyTypeId:1,
          PolicyName:policy.Description,
          PremiumAmount:Number(policy.totalAmpount),
          CreateUserId:this.loggedinUser.userid,
          StatusId:1
        }
     loadScreen();
        this.clientService.addPolicyHolder(data)
        .subscribe(response=>{
          stopLoadingScreen();
          if (response === 1) {
            this.showSuccess();
            setTimeout(() => {
                this.router.navigate(["/clients/view"]);
            }, 2000);
        }
        if (response === POLICY_HOLDER_EXIST) {
            this.showError("Policy holder alreay exists");
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
