import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IS_LOCAL } from './shared/config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private location : LocationStrategy) {
    }

    ngOnInit() {
        this.checkURL();
    }
    checkURL() {
        debugger
        if (!IS_LOCAL) {
          let baseUrlMain = (<any>this.location)._platformLocation.location.href;
          const BASE_URLMAIN_SECURE = "https://www.isithebe.co.za";
          var res = baseUrlMain.substring(0, 26);
          if (res != BASE_URLMAIN_SECURE) {
            window.location.href = BASE_URLMAIN_SECURE;
          }
        }
      }
}
