import { Pipe, PipeTransform } from '@angular/core';
import { CALL_ME_BACK_CRITACAL_NUMBER_OF_DAYS } from '../../../shared/config';

@Pipe({
  name: 'callstatus'
})
export class CallStatusPipe implements PipeTransform {

  transform(value: Date ): string {
    let today:Date = new Date();
    let diff:number = this.date_diff_indays(value,today);
    diff++;

    if(!diff) return "none"
    if(diff < CALL_ME_BACK_CRITACAL_NUMBER_OF_DAYS) return "orange"
    if(diff >=CALL_ME_BACK_CRITACAL_NUMBER_OF_DAYS) return "red"
    
  }
   date_diff_indays(date1, date2) :number{
    let dt1 = new Date(date1);
    let dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }
}
