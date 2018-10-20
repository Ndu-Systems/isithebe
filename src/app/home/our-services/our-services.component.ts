import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss'],
  animations: [routerTransition()]
})
export class OurServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
