import { Observable } from 'rxjs';
import { SelectService } from './../../../shared/services/select.service';
import { Component, OnInit } from '@angular/core';
import { Message, ConfirmationService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import { User, MenuItem } from '../../../models';
import { routerTransition } from '../../../router.animations';
import { ClientService } from '../../../services/client/client.service';
import { USER_NOT_FOUND } from '../../../shared/config';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss'],
  animations: [routerTransition()]
})
export class EditClientComponent implements OnInit {
  msgs: Message[] = [];
  client$: Observable<User>;
  clientId: string;
  menus: MenuItem[];
  msg: string;
  currentUser;
  constructor(
    private selectService: SelectService,
    private route: ActivatedRoute,
    private router: Router,
    private clientService: ClientService,
    private confirmationService: ConfirmationService,

  ) { }

  ngOnInit() {
    this.menus = [
      { name: 'Dashboard', url: '/dashboard' },
      { name: 'Clients', url: '/clients' },
    ];
    this.clientId = this.route.snapshot.paramMap.get("id");
    this.client$ = this.selectService.select(`users WHERE UserId = '${this.clientId}'`)
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({
      severity: "success",
      summary: "Success Message",
      detail: "Client Updated Successfully"
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

  edit(client) {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {

        this.msg = undefined;

        if (client.FirstName === undefined || client.FirstName === "") {
          this.showError("Please fill in Required Fields");
          return false;
        }
        if (client.Surname === undefined || client.Surname === "") {
          this.showError("Please fill in Required Fields");
          return false;
        }
        if (client.IDNumber === undefined || client.IDNumber === "") {
          this.showError("Please fill in Required Fields");
          return false;
        }
        if (client.ContactNumbers === undefined || client.ContactNumbers === "") {
          this.showError("Please fill in Required Fields");
          return false;
        }
        if (client.AddressLine1 === undefined || client.AddressLine1 === "") {
          this.showError("Please fill in Required Fields");
          return false;
        }
        if (client.AddressLine2 === undefined || client.AddressLine2 === "") {
          this.showError("Please fill in Required Fields");
          return false;
        }
        if (client.AddressLine3 === undefined || client.AddressLine3 === "") {
          client.AddressLine3 = " ";
        }
        if (client.City === undefined || client.City === "") {
          this.showError("Please fill in Required Fields");
          return false;
        }
        if (client.PostCode === undefined || client.PostCode === "") {
          this.showError("Please fill in Required Fields");
          return false;
        }

        let data = {
          UserId: client.UserId,
          FirstName: client.FirstName,
          Surname: client.Surname,
          IDNumber: client.IDNumber,
          Email: client.Email,
          Cellphone: client.ContactNumbers,
          AddressLine1: client.AddressLine1,
          AddressLine2: client.AddressLine2,
          AddressLine3: client.AddressLine3,
          City: client.City,
          PostCode: client.PostCode,
          CreateUserId: client.CreateUserId,
          ModifyUserId: this.currentUser.userid,
          CreateDate: client.CreateDate,
          StatusId: client.StatusId,
          Role: client.Role,
          Password: client.Password,
          Benefactor: client.Benefactor,
          Token: client.Token,
          JoiningDate : client.JoiningDate
        };

        this.clientService.updateClient(data).subscribe(response => {
          if (response === 1) {
            this.showSuccess();
            setTimeout(() => {
              this.router.navigate(["/clients"]);
            }, 2000);
          }
          if (response === USER_NOT_FOUND) {
            this.showError("Client Could does not exist");
          }
        });
      }
    });

  }

}
