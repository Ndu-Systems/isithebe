import { Component, OnInit } from '@angular/core';
import { User } from '../../../models';
import { Observable } from 'rxjs';
import { Message } from 'primeng/api';
import { SelectService } from '../../../shared';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../services';
import { routerTransition } from '../../../router.animations';

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


    constructor(
        private selectService: SelectService,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService
    ) { }

    ngOnInit() {
        this.userId = this.route.snapshot.paramMap.get('id');
        this.user$ = this.selectService.select(`users WHERE  UserId = '${this.userId}'`);
    }

    showSuccess() {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Password Updated Successfully' });
    }

    showError(msg) {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Validation Message', detail: `${msg}` });
    }

}
