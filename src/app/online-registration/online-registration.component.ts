import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-online-registration',
  templateUrl: './online-registration.component.html',
  styleUrls: ['./online-registration.component.scss'],
  animations: [routerTransition()]
})
export class OnlineRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
