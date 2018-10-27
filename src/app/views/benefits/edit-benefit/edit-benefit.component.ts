import { BenefitService } from './../../../services/benefit/benefit.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Benefit, MenuItem } from '../../../models';
import { SelectService } from '../../../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { Message, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-edit-benefit',
  templateUrl: './edit-benefit.component.html',
  styleUrls: ['./edit-benefit.component.scss'],
  animations: [routerTransition()]
})
export class EditBenefitComponent implements OnInit {
  benefit$ : Observable<Benefit>;
  benefitId : string;
  menus: MenuItem[];
  msgs: Message[] = [];
  msg: string;
  currentUser;
  constructor(
    private selectService: SelectService,
    private route: ActivatedRoute,
    private router: Router,
    private benefitService: BenefitService,
    private confirmationService: ConfirmationService,

  ) { }

  ngOnInit() {
    this.menus = [
      { name: 'Dashboard', url: '/dashboard' },
      { name: 'Benefits', url: '/benefits' },
    ];
    this.benefitId = this.route.snapshot.paramMap.get("id");
    this.benefit$ = this.selectService.select(`benefits WHERE BenefitId = '${this.benefitId}'`);
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({
      severity: "success",
      summary: "Success Message",
      detail: "Benefit Updated Successfully"
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

  edit(benefit){

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.msg = undefined;
        if (!benefit.Amount) {
            this.showError("Please fill in Required Fields");
            return false;
        }
        if (!benefit.Description) {
            this.showError("Please fill in Required Fields");
            return false;
        }      
  
        let data = {
          Description: benefit.Description,
          Amount: benefit.Amount,
          BenefitId: benefit.BenefitId,
          ModifyUserId: this.currentUser.userid,      
          StatusId:benefit.StatusId
        };
  
        this.benefitService.editBenefit(data).subscribe(response => {
          if (response === 1) {
              this.showSuccess();
              setTimeout(() => {
                  this.router.navigate(["/benefits"]);
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
