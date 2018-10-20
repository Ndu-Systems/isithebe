import { Component, OnInit } from '@angular/core';
import { MenuItem, Policy } from '../../../models';
import { SelectService } from '../../../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Message } from 'primeng/api';
import { PolicyService } from '../../../services/policy/policy.service';
import { routerTransition } from '../../../router.animations';

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
    private policyService : PolicyService
  ) { }

  ngOnInit() {
    this.menus = [
      { name: 'Dashboard', url: '/dashboard' },
      { name: 'Policies', url: '/policies' },
    ];
    this.policyId = this.route.snapshot.paramMap.get("id");
    this.policy$ = this.selectService.select(`policies WHERE PolicyId = '${this.policyId}'`);
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
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
}
