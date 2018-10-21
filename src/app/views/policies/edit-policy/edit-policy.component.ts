import { Component, OnInit } from '@angular/core';
import { MenuItem, Policy } from '../../../models';
import { SelectService } from '../../../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Message, ConfirmationService } from 'primeng/api';
import { PolicyService } from '../../../services/policy/policy.service';
import { routerTransition } from '../../../router.animations';
import { CURRENT_LOGGED_IN_USER } from '../../../shared/config';

@Component({
  selector: 'app-edit-policy',
  templateUrl: './edit-policy.component.html',
  styleUrls: ['./edit-policy.component.scss'],
  animations: [routerTransition()]
})
export class EditPolicyComponent implements OnInit {
  menus: MenuItem[];
  msg: string;
  policyId: string;
  policy$: Observable<Policy>;
  msgs: Message[] = [];
  currentUser;
  constructor(
    private selectService: SelectService,
    private route: ActivatedRoute,
    private router: Router,
    private policyService : PolicyService,
    private confirmationService: ConfirmationService,

  ) { }

  ngOnInit() {
    this.menus = [
      { name: 'Dashboard', url: '/dashboard' },
      { name: 'Policies', url: '/policies' },
    ];
    this.policyId = this.route.snapshot.paramMap.get("id");
    this.policy$ = this.selectService.select(`policies WHERE PolicyId = '${this.policyId}'`);
    this.currentUser = JSON.parse(localStorage.getItem(CURRENT_LOGGED_IN_USER));
  }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({
      severity: "success",
      summary: "Success Message",
      detail: "Policy Updated Successfully"
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

  edit(policy){

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.msg = undefined;
        if (!policy.Amount) {
            this.showError("Please fill in Required Fields");
            return false;
        }
        if (!policy.Description) {
            this.showError("Please fill in Required Fields");
            return false;
        }
        
  
        let data = {
          Description: policy.Description,
          Amount: policy.Amount,
          PolicyId: policy.PolicyId,
          ModifyUserId: this.currentUser.userid,
          StatusId:policy.StatusId
        };
  
        this.policyService.editPolicy(data).subscribe(response => {
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
  });
    
  }
}
