import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { Router } from '@angular/router';
import { ClientService } from '../../../services/client/client.service';
import { IfStmt } from '@angular/compiler';
import { USER_EXIST, loadScreen, stopLoadingScreen } from '../../../shared/config';
import { routerTransition } from '../../../router.animations';
import { MenuItem } from '../../../models/header/MenuItem';

@Component({
    selector: 'app-add-client',
    templateUrl: './add-client.component.html',
    styleUrls: ['./add-client.component.scss'],
    animations: [routerTransition()]

})
export class AddClientComponent implements OnInit {
    FirstName: string;
    Surname: string;
    IDNumber: string;
    Email: string = 'client@isithebe.co.za';
    Cellphone: string;
    AddressLine1: string;
    AddressLine2: string;
    AddressLine3: string;
    City: string;
    PostCode: string;
    msgs: Message[] = [];
    msg: string;
    menus: MenuItem[];
    currentUser;
    JoiningDate;
    constructor(
        private router: Router,
        private patientService: ClientService
    ) { }

    ngOnInit() {
        this.menus = [
            { name: 'Dashboard', url: '/dashboard' },
            { name: 'Clients', url: '/clients' },
        ];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    showSuccess() {
        this.msgs = [];
        this.msgs.push({
            severity: 'success',
            summary: 'Success Message',
            detail: 'Client Added Successfully'
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
    add() {
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
        if (this.IDNumber === undefined || this.IDNumber === '') {
            this.showError('Please fill in Required Fields');
            return false;
        }
        if (this.Cellphone === undefined || this.Cellphone === '') {
            this.showError('Please fill in Required Fields');
            return false;
        }
        if (this.AddressLine1 === undefined || this.AddressLine1 === '') {
            this.showError('Please fill in Required Fields');
            return false;
        }
        if (this.AddressLine2 === undefined || this.AddressLine2 === '') {
            this.showError('Please fill in Required Fields');
            return false;
        }
        if (this.AddressLine3 === undefined || this.AddressLine3 === '') {
            this.AddressLine3 = ' ';
        }
        if (this.City === undefined || this.City === '') {
            this.showError('Please fill in Required Fields');
            return false;
        }
        if (this.PostCode === undefined || this.PostCode === '') {
            this.showError('Please fill in Required Fields');
            return false;
        }

        let data = {
            FirstName: this.FirstName,
            Surname: this.Surname,
            IDNumber: this.IDNumber,
            Email: this.Email,
            Cellphone: this.Cellphone,
            AddressLine1: this.AddressLine1,
            AddressLine2: this.AddressLine2,
            AddressLine3: this.AddressLine3,
            City: this.City,
            PostCode: this.PostCode,
            CreateUserId: this.currentUser.userid,
            JoiningDate: this.JoiningDate

        };
        loadScreen();
        this.patientService.addClient(data).subscribe(response => {
            stopLoadingScreen();
            if (response === 1) {
                this.showSuccess();
                setTimeout(() => {
                    this.router.navigate(['/clients']);
                }, 2000);
            }
            if (response === USER_EXIST) {
                this.showError('Client alreay exists');
            }
        });
    }
}
