import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-our-policies',
  templateUrl: './our-policies.component.html',
  styleUrls: ['./our-policies.component.scss'],
  animations: [routerTransition()]
})
export class OurPoliciesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
