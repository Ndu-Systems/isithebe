import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectService } from '../../../shared';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { User } from '../../../models/user/User';
import { SELECTED_CLIENT } from '../../../shared/config';
import { MenuItem } from '../../../models/header/MenuItem';

@Component({
    selector: 'app-view-clients',
    templateUrl: './view-clients.component.html',
    styleUrls: ['./view-clients.component.scss'],
    animations: [routerTransition()]

})
export class ViewClientsComponent implements OnInit {

    patients$: Observable<any>;
    searchText: string;
    p: any;
    menus: Array<MenuItem>;
    constructor(
        private selectService: SelectService,
        private route: Router
    ) { }

    ngOnInit() {
        this.patients$ = this.selectService.select("users WHERE  Role = 'client' AND StatusId = 1 ORDER BY CreateDate DESC ");

        this.menus = [
            { name: 'Dashboard', url: '/dashboard' }
        ];
    }
    view(client: User) {
        localStorage.setItem(SELECTED_CLIENT, JSON.stringify(client));
        this.route.navigate([`/clients/view`]);
    }

    edit(client: User) {
        this.route.navigate(['/clients/edit', client.UserId]);
    }
}
