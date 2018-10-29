import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { Message } from 'primeng/api';
import { AccountService } from '../services';
import { CURRENT_LOGGED_IN_USER } from '../shared/config';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    Email : any = "admin@isithebe.co.za"
    Password : any ="pass"
    msgs: Message[] = [];

    constructor( 
       private router: Router,
        private accountService : AccountService
    ) {}
    showSuccess() {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Successfully Verified' });
      }
      showError(msg) {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Validation Message', detail: `${msg}` });
      }
    ngOnInit() {
      localStorage.clear();
    }

    onLoggedin() {
        this.accountService.loginUser(this.Email,this.Password)
        .subscribe((response) =>{
          let user = response;                 
            if(user.Email!== undefined){
              this.showSuccess();
              setTimeout(() => {            
                localStorage.setItem(CURRENT_LOGGED_IN_USER,JSON.stringify({username:user.Email,userid:user.UserId}));    
                this.router.navigate(['/dashboard']);
            
              }, 2000);                           
            }        
          else{
            this.showError("Email/Password is not verified");
          }
        }); 
    }

    onForgotPassoword(){
      localStorage.setItem("forgotEmail",this.Email);
      this.router.navigate(['login/enter-email']);
    }
}
