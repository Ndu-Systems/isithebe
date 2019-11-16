import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { AccountService } from '../../../../services/account';
import { EmailService, SelectService } from '../../../../shared';
import { Message } from 'primeng/api';
import { WEB_HOST } from '../../../../shared/config';

@Component({
    selector: 'app-enter-email',
    templateUrl: './enter-email.component.html',
    styleUrls: ['./enter-email.component.scss'],
    animations: [routerTransition()]
})
export class EnterEmailComponent implements OnInit {
    msgs: Message[] = [];
    email;
    token;
    fullName;
    constructor(
        private accountService: AccountService,
        private emailService: EmailService,
        private selectService: SelectService,
        private router: Router) { }

    ngOnInit() {
        this.email = localStorage.getItem('forgotEmail');
        if (!this.email) {
            this.email = null;
        }
    }
    showSuccess() {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Please Check Your Email' });
    }
    showError(msg) {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Validation Message', detail: `${msg}` });
    }

    requestLink() {
        if (this.email !== undefined && this.email !== '') {
            this.accountService.forgotPassword(this.email).subscribe(response => {
                if (response === 1) {
                    this.selectService.select(`users WHERE Email = '${this.email}'`)
                        .subscribe(response => {
                            this.token = response[0].Token;
                            this.fullName = response[0].FirstName + ' ' + response[0].Surname;

                            //email here
                            let email = {
                                email: this.email,
                                subject: 'Forgot Password - Reset',
                                message: `Hi ${this.fullName} ! <br/>
                                 <h2>Please Note! to reset your password</h2> <br/>
                                 Please click link below to reset password<br/>
                                 <table>
                                 <tr>
                                 <td><a href=${WEB_HOST}/#/login/forgot-password?tokken=${this.token}>Reset Password</a> </td>
                                 <td> </td>
                                 </tr>
                                 </table><br/>
                                 We hope you find this a Good Read...
                                 `
                            }

                            this.emailService.sendEmail(email).subscribe(data => {
                                if (data === 1) {
                                    this.showSuccess();
                                    setTimeout(() => {
                                        this.router.navigate(['/home']);

                                    }, 3000);
                                }
                            })

                        });
                }
            })
        }
        else {
            this.showError('Email is a Required Field');
        }
    }
}
