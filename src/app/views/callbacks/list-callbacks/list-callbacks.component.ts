import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { SelectService } from '../../../shared';

@Component({
  selector: 'app-list-callbacks',
  templateUrl: './list-callbacks.component.html',
  styleUrls: ['./list-callbacks.component.scss'],
  animations: [routerTransition()]
})
export class ListCallbacksComponent implements OnInit {
  searchText;
  p;
  callbacks$;
  constructor(private selectService : SelectService) { 
    this.callbacks$ = this.selectService.select("callbacks where StatusId = 1")
  }

  ngOnInit() {
  }

}