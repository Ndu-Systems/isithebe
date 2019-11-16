import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { User } from '../../../models';
import { SelectService } from '../../../shared';
import { Message } from 'primeng/api';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { ClientService } from '../../../services/client/client.service';
import { USER_NOT_FOUND } from '../../../shared/config';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [routerTransition()]
})
export class ForgotPasswordComponent implements OnInit {

  Password;
  ConfirmPassword;
  token;
  user:User;
  Email;
  msgs: Message[] = [];
  constructor(
    private location: LocationStrategy,
    private selectService : SelectService,
    private router : Router,
    private clientService : ClientService
  ) { }

  ngOnInit() {
      let baseUrlMain: string = (<any>this.location)._platformLocation.location.href;

      this.token = baseUrlMain.substring(baseUrlMain.indexOf("=") + 1);

      this.getUserByToken();
  }
  showSuccess() {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Please sign-in with latest credentials' });
  }
  showError(msg) {
    this.msgs = [];
    this.msgs.push({ severity: 'warn', summary: 'Validation Message', detail: `${msg}` });
  }
  getUserByToken(){
    if(!this.token){
        this.showError("Token not found please try again");
        setTimeout(() => {
          this.router.navigate(['login/enter-email']);
       }, 2000);
    }
    this.selectService.select(`users WHERE Token  = '${this.token}'`)
        .subscribe(response => {
          debugger
          let check: any[] = response;
          if(check.length == 0){
              this.showError("The link has either been used or invalid");
              setTimeout(() => {
                this.router.navigate(['login/enter-email']);
             }, 2000);
          }
          this.user = response[0];

        })
  }

  save(){

    if (!this.Password) {
      this.showError("Please enter password");
      return false;
    }
    if (this.Password.length < 6) {
      this.showError("You password must be atleast 6 characters");
      return false;
    }
    if (this.Password != this.ConfirmPassword) {
      this.showError("Passwords do not match");
      return false;
    }
    if (this.Password == this.user.Password) {
      this.showError("You cannot use the same password as your previous");
      return false;
    }
    let data = {
      UserId: this.user.UserId,
      FirstName: this.user.FirstName,
      Surname: this.user.Surname,
      IDNumber: this.user.IDNumber,
      Email: this.user.Email,
      Cellphone: this.user.ContactNumbers,
      AddressLine1: this.user.AddressLine1,
      AddressLine2: this.user.AddressLine2,
      AddressLine3: this.user.AddressLine3,
      City: this.user.City,
      PostCode: this.user.PostCode,
      CreateUserId: this.user.CreateUserId,
      ModifyUserId: this.user.UserId,
      CreateDate: this.user.CreateDate,
      StatusId: this.user.StatusId,
      Role: this.user.Role,
      Password: this.Password,
      Benefactor: this.user.Benefactor,
      Token: this.token
    };
    this.clientService.updateClient(data).subscribe(response => {
      if (response === 1) {
        this.showSuccess();
        setTimeout(() => {
          this.router.navigate(["/login"]);
        }, 2000);
      }
      if (response === USER_NOT_FOUND) {
        this.showError("Client Could does not exist");
      }
    });


  }

}
