import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectService } from '../../../shared';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-view-clients',
  templateUrl: './view-clients.component.html',
  styleUrls: ['./view-clients.component.scss'],
  animations: [routerTransition()]

})
export class ViewClientsComponent implements OnInit {

  patients$ : Observable<any>;  
  searchText:string;
  p : any

  constructor(
    private selectService : SelectService ,
    private route : Router
  ) { }

  ngOnInit() {
    this.patients$ = this.selectService.select("users WHERE  Role = 'client' ORDER BY CreateDate DESC ");
  }
  view(client){ 
    this.route.navigate([`/clients/view`, client.UserId]);
  }
}
