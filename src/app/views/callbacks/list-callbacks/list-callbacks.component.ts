import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';
import { SelectService } from '../../../shared';
import { MenuItem } from '../../../models/header/MenuItem';
import { CALL_ME_BACK_CRITACAL_NUMBER_OF_DAYS } from '../../../shared/config';

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
  menus:Array<MenuItem>;
  numberOfDays:number = CALL_ME_BACK_CRITACAL_NUMBER_OF_DAYS;

  constructor(private selectService : SelectService) { 
    this.callbacks$ = this.selectService.select("callbacks where StatusId = 1")
  }

  ngOnInit() {
    this.menus = [
      {name:'Dashboard',url:'/dashboard'}
    ];
  }

}
