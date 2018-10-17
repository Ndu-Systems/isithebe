import { Observable } from "rxjs";
import { Policy } from "./../../../models/policy/policy";
import { Component, OnInit } from "@angular/core";
import { SELECTED_POLICY } from "../../../shared/config";
import { Router } from "@angular/router";
import { SelectService } from "../../../shared";
import { routerTransition } from "../../../router.animations";

@Component({
    selector: "app-view-policy",
    templateUrl: "./view-policy.component.html",
    styleUrls: ["./view-policy.component.scss"],
    animations: [routerTransition()]
})
export class ViewPolicyComponent implements OnInit {
    policy: Policy;
    benefits$: Observable<any>;
    constructor(private router: Router, private selectService: SelectService) {
        let policy = localStorage.getItem(SELECTED_POLICY);

        if (!policy) this.router.navigate(["policies"]);

        this.policy = JSON.parse(policy);
    }

    ngOnInit() {
        console.log(this.policy);
        this.benefits$ = this.selectService.select(
            `policybenefits right join  benefits on policybenefits.BenefitId = benefits.BenefitId where PolicyId = '${
                this.policy.PolicyId
            }'`
        );
    }
    viewBenefit(item){
      alert('Benefit details under contruction');
    }
}
