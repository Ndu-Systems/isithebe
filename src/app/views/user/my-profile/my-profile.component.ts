import { Component, OnInit } from '@angular/core';
import { User, MenuItem } from '../../../models';
import { Observable } from 'rxjs';
import { Message } from 'primeng/api';
import { SelectService } from '../../../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService, ClientService } from '../../../services';
import { routerTransition } from '../../../router.animations';
import { USER_NOT_FOUND } from '../../../shared/config';

@Component({
    selector: 'app-my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.scss'],
    animations: [routerTransition()]
})
export class MyProfileComponent implements OnInit {
    user$: Observable<User>;
    userId: string;
    msgs: Message[] = [];
    p: any;
    menus: Array<MenuItem>;
    companyName = 'isithebe burial society';
    msg: string;

    constructor(
        private selectService: SelectService,
        private route: ActivatedRoute,
        private router: Router,
        private clientService: ClientService,
        private accountService: AccountService
    ) { }

    ngOnInit() {
        this.userId = this.route.snapshot.paramMap.get('id');
        this.user$ = this.selectService.select(`users WHERE  UserId = '${this.userId}'`);
        this.menus = [
            { name: 'Dashboard', url: '/dashboard' },
        ];
    }

    showSuccess(msg, svrty) {
        this.msgs = [];
        this.msgs.push({
            severity: `${svrty}`,
            summary: 'Success Message',
            detail: `${msg}`
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

    update(user: User) {
        if (user.FirstName === undefined || user.FirstName === '') {
            this.showError('Updated name cannot be empty');
            return false;
        }
        if (user.Surname === undefined || user.Surname === '') {
            this.showError('Updated surname cannot be empty');
            return false;
        }
        if (user.IDNumber === undefined || user.IDNumber === '') {
            this.showError('Updated ID Number cannot be empty');
            return false;
        }
        if (user.ContactNumbers === undefined || user.ContactNumbers === '') {
            this.showError('Updated Cell Number cannot be empty');
            return false;
        }
        const data = {
            UserId: user.UserId,
            FirstName: user.FirstName,
            Surname: user.Surname,
            IDNumber: user.IDNumber,
            Email: user.Email,
            Cellphone: user.ContactNumbers,
            AddressLine1: user.AddressLine1,
            AddressLine2: user.AddressLine2,
            AddressLine3: user.AddressLine3,
            City: user.City,
            PostCode: user.PostCode,
            CreateUserId: user.CreateUserId,
            ModifyUserId: user.UserId,
            CreateDate: user.CreateDate,
            StatusId: user.StatusId,
            Role: user.Role,
            Password: user.Password,
            Benefactor: user.Benefactor,
            Token: user.Token,
            JoiningDate: user.JoiningDate
        };
        this.clientService.updateClient(data).subscribe(response => {
            if (response === 1) {
                this.showSuccess('User Profile Updated Successfully', 'success');
                setTimeout(() => {
                }, 2000);
            }
            if (response === USER_NOT_FOUND) {
                this.showError('Something went wrong');
            }
        });
    }

}
