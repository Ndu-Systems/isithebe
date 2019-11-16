import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { CallBackService } from '../../services';
import { Message } from 'primeng/api';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    animations: [routerTransition()]
})
export class IndexComponent implements OnInit {

    Name;
    Cellphone;
    UserId = '';
    data;
    msgs: Message[] = [];

    constructor(private callBackService: CallBackService) { }

    ngOnInit() {
    }
    showSuccess() {
        this.msgs = [];
        // tslint:disable-next-line: max-line-length
        this.msgs.push({ severity: 'success', summary: 'Success!', detail: 'Thank you for taking this decision our representative will call you soon' });
    }
    showError(msg) {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Validation Message', detail: `${msg}` });
    }
    logCallBack() {
        if (this.Name === undefined || this.Name === '') {
            this.showError('Please fill in Required Fields');
            return false;
        }
        if (this.Cellphone === undefined || this.Cellphone === '') {
            this.showError('Please fill in Required Fields');
            return false;
        }

        this.data = {
            Name: this.Name,
            Cellphone: this.Cellphone,
            UserId: this.UserId
        };
        this.callBackService.logCallBack(this.data)
            .subscribe((response) => {
                if (response === 1) {
                    this.showSuccess();
                    setTimeout(() => {
                        this.Name = '';
                        this.Cellphone = '';
                    }, 5000);
                }
            });

    }
}
