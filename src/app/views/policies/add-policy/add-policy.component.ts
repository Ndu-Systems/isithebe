import { PolicyService } from './../../../services/policy/policy.service';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { Message } from 'primeng/api';
import { Router } from '@angular/router';
import { MenuItem } from '../../../models/header/MenuItem';

@Component({
  selector: 'app-add-policy',
  templateUrl: './add-policy.component.html',
  styleUrls: ['./add-policy.component.scss'],
  animations: [routerTransition()]

})
export class AddPolicyComponent implements OnInit {

  Amount: number;
  Description: string;
  CreateUserId:number = 1;
  msgs: Message[] = [];
  msg: string;
  menus:Array<MenuItem>;
  currentUser;
  constructor(
      private router: Router,
      private policyService: PolicyService
  ) {}

  ngOnInit() {
    this.menus = [
        {name:'Dashboard',url:'/dashboard'},
        {name:'Policies',url:'/policies',icon:'file'},
      ];
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  showSuccess() {
      this.msgs = [];
      this.msgs.push({
          severity: "success",
          summary: "Success Message",
          detail: "Policy Added Successfully"
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
  add() {
      this.msg = undefined;
      if (!this.Amount) {
          this.showError("Please fill in Required Fields");
          return false;
      }
      if (!this.Description) {
          this.showError("Please fill in Required Fields");
          return false;
      }
      

      let data = {
        Description: this.Description,
          Amount: this.Amount,
          CreateUserId:this.currentUser.userid
      };
      this.policyService.addPolicy(data).subscribe(response => {
          if (response === 1) {
              this.showSuccess();
              setTimeout(() => {
                  this.router.navigate(["/policies"]);
              }, 2000);
          }
          if (response === "500") {
              this.showError("Policy alreay exists");
          }
      });
  }

}
