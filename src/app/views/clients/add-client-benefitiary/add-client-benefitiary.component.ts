import { Component, OnInit } from '@angular/core';
import { MenuItem, User } from '../../../models';
import { Observable } from 'rxjs';
import { Message, ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
import { SelectService } from '../../../shared';
import { ClientService } from '../../../services/client/client.service';
import { SELECTED_CLIENT, CURRENT_LOGGED_IN_USER, POLICY_HOLDER_EXIST, loadScreen, stopLoadingScreen } from '../../../shared/config';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-add-client-benefitiary',
  templateUrl: './add-client-benefitiary.component.html',
  styleUrls: ['./add-client-benefitiary.component.scss'],
  animations: [routerTransition()]

})
export class AddClientBenefitiaryComponent implements OnInit {
  menus:Array<MenuItem>;
  client:User;
  policies$:Observable<Array<any>>;
  msgs: Message[] = [];
  msg: string;
  searchText: string;
  p:any;
  loadingBenefits:any;
  loggedinUser:any;

  idnumber:number;
  name:string;
  surname:string;
  type:string;
  typesLS:Array<string>;
  constructor(
    private router:Router,
    private selectService : SelectService,
    private confirmationService: ConfirmationService,
    private clientService:ClientService
  ) {
    let client = localStorage.getItem(SELECTED_CLIENT);

      if(!client) this.router.navigate(['clients']);

      this.client = JSON.parse(client);  

      // user 
      let currentUser = localStorage.getItem(CURRENT_LOGGED_IN_USER);
      if(!currentUser) this.router.navigate(['login']);
      this.loggedinUser =JSON.parse(currentUser);
   }
getTypes(){
 this.typesLS = ['Spouse','Child','Other'];
}
  ngOnInit() {
    this.policies$ = this.clientService.getPolicies();
this.getTypes();
    this.menus = [
      {name:'Dashboard',url:'/dashboard'},
      {name:'Clients',url:'/clients'},
      {name:this.client.FirstName,url:'/clients/view',icon:'user'},
    ];
  }
  add(){
    if(!this.name || !this.surname || !this.idnumber){
      this.showError('Please fill the form completly');
      return false;
    }    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
      
        let data: any ={
          name:this.name,
          surname:this.surname,
          idnumber:this.idnumber,
          type:this.type,
          CreateUserId:this.loggedinUser.userid,
          ModifyUserId:this.loggedinUser.userid,
          UserId:this.client.UserId,

        }
     loadScreen();
        this.clientService.addBeneficiary(data)
        .subscribe(response=>{
          stopLoadingScreen();
          if (response === 1) {
            this.showSuccess();
            setTimeout(() => {
                this.router.navigate(["/clients/view"]);
            }, 2000);
        }
        if (response === POLICY_HOLDER_EXIST) {
            this.showError("beneficiary holder alreay exists");
        }
        })
        
      }
  });
  }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({
        severity: "success",
        summary: "Success Message",
        detail: "beneficiary Added Successfully"
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

}
