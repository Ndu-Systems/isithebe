import { Benefit } from './../../../../models/benefit/benefit';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-policy-benefis-list',
  templateUrl: './policy-benefis-list.component.html',
  styleUrls: ['./policy-benefis-list.component.scss']
})
export class PolicyBenefisListComponent implements OnInit {
@Input() benefits:Array<Benefit>;
  constructor() { }

  ngOnInit() {
  }

}
