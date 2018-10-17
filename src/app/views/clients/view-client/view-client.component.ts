import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { User } from '../../../models/user/User';
import { SelectService } from '../../../shared';
import { SELECTED_CLIENT } from '../../../shared/config';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.scss'],
  animations: [routerTransition()]

})
export class ViewClientComponent implements OnInit {
client:User;
policies$:Observable<Array<any>>;
  constructor(
    private router:Router,
    private selectService : SelectService
    ) { 
      let client = localStorage.getItem(SELECTED_CLIENT);

      if(!client) this.router.navigate(['clients']);

      this.client = JSON.parse(client);

  }

  ngOnInit() {
    console.log(this.client);
    this.policies$ = this.selectService.select(`policyholder WHERE UserId = '${this.client.UserId}'`);
  }

}
