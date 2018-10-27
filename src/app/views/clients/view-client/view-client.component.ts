import { ClientService } from './../../../services/client/client.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { routerTransition } from "../../../router.animations";
import { User } from "../../../models/user/User";
import { SelectService } from "../../../shared";
import { SELECTED_CLIENT } from "../../../shared/config";
import { Observable } from "rxjs";
import { MenuItem } from "../../../models/header/MenuItem";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: "app-view-client",
    templateUrl: "./view-client.component.html",
    styleUrls: ["./view-client.component.scss"],
    animations: [routerTransition()]
})
export class ViewClientComponent implements OnInit {
    client: User;
    clientObject$: Observable<Array<any>>;
    menus: Array<MenuItem>;
    searchText: string;
    p: any;
    constructor(private router: Router,
        private clientService: ClientService,
        private modalService: NgbModal) {
        let client = localStorage.getItem(SELECTED_CLIENT);

        if (!client) this.router.navigate(["clients"]);

        this.client = JSON.parse(client);
    }

    ngOnInit() {
        console.log(this.client);
        this.clientObject$ = this.clientService.getPoliciesAndBens(this.client.UserId);


        this.menus = [
            { name: "Dashboard", url: "/dashboard" },
            { name: "Clients", url: "/clients" }
        ];
    }
    addPolicyHolder() {
        this.router.navigate(["clients/add-policyholder"]);
    }
    addBeneficiary() {
        this.router.navigate(["clients/add-client-beneficiary"]);
    }

    //modal
    closeResult: string;

    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Print Details Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Print Details Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
