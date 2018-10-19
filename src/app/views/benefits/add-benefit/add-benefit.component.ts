import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { MenuItem } from '../../../models';
import { Router } from '@angular/router';
import { BenefitService } from '../../../services/benefit';

@Component({
  selector: 'app-add-benefit',
  templateUrl: './add-benefit.component.html',
  styleUrls: ['./add-benefit.component.scss']
})
export class AddBenefitComponent implements OnInit {

  Amount: Number;
  Description: string;
  msgs: Message[] = [];
  msg: string;
  menus: Array<MenuItem>;

  constructor(
    private router: Router,
    private benefitService: BenefitService
  ) { }

  ngOnInit() {
    this.menus = [
      { name: 'Dashboard', url: '/dashboard' },
      { name: 'Benefits', url: '/benefits', icon: 'cubes' },
    ];
  }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({
      severity: "success",
      summary: "Success Message",
      detail: "Benefit Added Successfully"
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
      Amount: this.Amount
    };

    this.benefitService.addBenefit(data)
      .subscribe(response => {
        if (response == 1) {
          this.showSuccess();
          setTimeout(() => {
            this.router.navigate(["/benefits"]);
          }, 2000);
        }
        else {
          this.showError(response);
        }
      });
  }

}
