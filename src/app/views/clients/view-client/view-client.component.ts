import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-client',
  templateUrl: './view-client.component.html',
  styleUrls: ['./view-client.component.scss']
})
export class ViewClientComponent implements OnInit {
userId:string;
  constructor(private route:ActivatedRoute) { 

    // this.userId = this.route.params.id
    // alert(this.userId)
  }

  ngOnInit() {
  }

}
