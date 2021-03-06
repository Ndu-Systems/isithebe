import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { ClientService } from '../../services/client/client.service';
import { USER_EXIST } from '../../shared/config';

@Component({
    selector: 'app-online-registration',
    templateUrl: './online-registration.component.html',
    styleUrls: ['./online-registration.component.scss'],
    animations: [routerTransition()]
})
export class OnlineRegistrationComponent implements OnInit {
    FirstName: string;
    Surname: string;
    IDNumber: string;
    Email: string;
    Cellphone: string;
    AddressLine1: string;
    AddressLine2: string;
    AddressLine3: string;
    City: string;
    PostCode: string;
    msgs: Message[] = [];
    msg: string;
    constructor(
        private router: Router,
        private clientService: ClientService
    ) { }

    ngOnInit() { }
    showSuccess() {
        this.msgs = [];
        this.msgs.push({
            severity: 'success',
            summary: 'Success Message',
            detail: 'Registration Submitted Successfully'
        });
    }
    showError(msg) {
        this.msgs = [];
        this.msgs.push({
            severity: 'warn',
            summary: 'Validation Message',
            detail: `${msg}`
        });
    }
    apply() {
        this.msg = undefined;
        if (this.Email == undefined || this.Email === '') {
            this.showError('Please fill in Required Fields');
            return false;
        }
        if (this.FirstName === undefined || this.FirstName === '') {
            this.showError('Please fill in Required Fields');
            return false;
        }
        if (this.Surname === undefined || this.Surname === '') {
            this.showError('Please fill in Required Fields');
            return false;
        }
        // if (this.IDNumber === undefined || this.IDNumber === "") {
        //     this.showError("Please fill in Required Fields");
        //     return false;
        // }
        if (this.Cellphone === undefined || this.Cellphone === '') {
            this.showError('Please fill in Required Fields');
            return false;
        }
        // if (this.AddressLine1 === undefined || this.AddressLine1 === "") {
        //     this.showError("Please fill in Required Fields");
        //     return false;
        // }
        // if (this.AddressLine2 === undefined || this.AddressLine2 === "") {
        //     this.showError("Please fill in Required Fields");
        //     return false;
        // }
        // if (this.AddressLine3 === undefined || this.AddressLine3 === "") {
        //     this.AddressLine3 = " ";
        // }
        // if (this.City === undefined || this.City === "") {
        //     this.showError("Please fill in Required Fields");
        //     return false;
        // }
        // if (this.PostCode === undefined || this.PostCode === "") {
        //     this.showError("Please fill in Required Fields");
        //     return false;
        // }

        let data = {
            FirstName: this.FirstName,
            Surname: this.Surname,
            IDNumber: this.IDNumber,
            Email: this.Email,
            Cellphone: this.Cellphone,
            AddressLine1: 'incomplete',
            AddressLine2: 'incomplete',
            AddressLine3: 'incomplete',
            City: 'incomplete',
            PostCode: 'incomplete',
            JoiningDate: 0,
            // GlobalKey: this.GlobalKey ,
            CreateUserId: 'system',
            // CreateDate: this.CreateDate ,
            // ModifyUserId: this.ModifyUserId,
            // ModifyDate: this.ModifyDate,
            // StatusId: this.StatusId;
        };
        this.clientService.addClient(data).subscribe(response => {
            if (response === 1) {
                this.showSuccess();
                setTimeout(() => {
                    this.router.navigate(['/home']);
                }, 2000);
            }
            if (response === USER_EXIST) {
                this.showError('This user already Exists Please login...');
            }
        });
    }

    cancel() {
        this.router.navigate(['/home']);
    }

}
