import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../models';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ClientService } from '../../../services';
import { SELECTED_CLIENT } from '../../../shared/config';

@Component({
    selector: 'app-client-print-details',
    templateUrl: './client-print-details.component.html',
    styleUrls: ['./client-print-details.component.scss']
})
export class ClientPrintDetailsComponent implements OnInit {
    beneficiaries: Array<any>;
    policies: Array<any>;
    today: number = Date.now();
    client: User;
    clientObject$: Observable<Array<any>>;
    constructor(private router: Router,
        private clientService: ClientService,
    ) {
        const client = localStorage.getItem(SELECTED_CLIENT);
        if (!client) { this.router.navigate(['clients']); }
        this.client = JSON.parse(client);
    }

    ngOnInit() {
        this.clientObject$ = this.clientService.getPoliciesAndBens(this.client.UserId);
        this.clientObject$.subscribe(data => {
            this.policies = data[0].Policies;
            this.beneficiaries = data[0].Beneficiaries;
        });
    }

    public captureScreen() {
        const data = document.getElementById('contentToConvert');
        html2canvas(data).then(canvas => {
            // required configurations
            const imgWidth = 208;
            const pageHeight = 295;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const heightLeft = imgHeight;

            const contentDataURL = canvas.toDataURL('image/png');
            const pdf = new jspdf('p', 'mm', 'a4'); // A4 size of the pdf
            const position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save(`policy wording for ${this.client.IDNumber}.pdf`); // Generates pdf
        });
    }

}
