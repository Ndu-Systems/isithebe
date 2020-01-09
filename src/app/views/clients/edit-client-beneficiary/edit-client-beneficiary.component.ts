import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { MenuItem, User } from '../../../models';
import { Observable } from 'rxjs';
import { Message, ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
import { SelectService } from '../../../shared';
import { ClientService } from '../../../services/client/client.service';
import { SELECTED_CLIENT, CURRENT_LOGGED_IN_USER, loadScreen, stopLoadingScreen, POLICY_HOLDER_EXIST, SELECTED_CLIENT_BENEFICIARY } from '../../../shared/config';

@Component({
    selector: 'app-edit-client-beneficiary',
    templateUrl: './edit-client-beneficiary.component.html',
    styleUrls: ['./edit-client-beneficiary.component.scss'],
    animations: [routerTransition()]

})
export class EditClientBeneficiaryComponent implements OnInit {
    menus: Array<MenuItem>;
    client: any;
    policies$: Observable<Array<any>>;
    msgs: Message[] = [];
    msg: string;
    searchText: string;
    p: any;
    loadingBenefits: any;
    loggedinUser: any;

    idnumber: string;
    name: string;
    surname: string;
    type: string;
    typesLS: Array<string>;
    constructor(
        private router: Router,
        private selectService: SelectService,
        private confirmationService: ConfirmationService,
        private clientService: ClientService
    ) {
        let client = localStorage.getItem(SELECTED_CLIENT_BENEFICIARY);

        if (!client) this.router.navigate(['clients']);

        this.client = JSON.parse(client);

        // user
        let currentUser = localStorage.getItem(CURRENT_LOGGED_IN_USER);
        if (!currentUser) this.router.navigate(['login']);
        this.loggedinUser = JSON.parse(currentUser);
    }
    getTypes() {
        this.typesLS = ['Child', 'Grand-Child', 'Spouse', 'Sister', 'Brother', 'Mother', 'Father', 'Grand-Parent', 'Other'];
    }
    initilizeClient() {
        this.name = this.client.name;
        this.surname = this.client.surname;
        this.type = this.client.type;
        this.idnumber = this.client.idnumber;
    }
    ngOnInit() {
        this.getTypes();
        this.initilizeClient();

        this.menus = [
            { name: 'Dashboard', url: '/dashboard' },
            { name: 'Clients', url: '/clients' },
            { name: this.client.FirstName, url: '/clients/view', icon: 'user' },
        ];
    }
    edit() {
        if (!this.name || !this.surname || !this.idnumber || !this.type) {
            this.showError('Please fill the form completly');
            return false;
        } this.confirmationService.confirm({
            message: 'Are you sure that you want to perform this action?',
            accept: () => {

                let data: any = {
                    name: this.name,
                    surname: this.surname,
                    idnumber: this.idnumber,
                    type: this.type,
                    beneficiaryId: this.client.beneficiaryId,
                    ModifyUserId: this.loggedinUser.userid,
                }
                loadScreen();
                this.clientService.updateBeneficiary(data)
                    .subscribe(response => {
                        stopLoadingScreen();
                        if (response === 1) {
                            this.showSuccess();
                            setTimeout(() => {
                                this.router.navigate(["/clients/view"]);
                            }, 2000);
                        }
                        if (response === POLICY_HOLDER_EXIST) {
                            this.showError("beneficiary holder alreay exists");
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
            detail: "beneficiary updated successfully"
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
