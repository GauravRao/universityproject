import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFilter'
})
export class DateRangeFilterPipe implements PipeTransform {

  transform(data: any, startDate: any, endDate: any): any {

    if (startDate === undefined) return data;
    else if (endDate === undefined) return data;
    else {
      startDate = new Date(startDate).getTime();
      endDate = new Date(endDate).getTime();
    }

    return data.filter(function(formatDate) {
      return formatDate.rideDate <= (endDate + 86400000) && formatDate.rideDate >= startDate;
    })
  }

}

@Pipe({
  name: 'paymentFilter'
})
export class DateRangeFilterPayment implements PipeTransform {

  transform(data: any, startDate: any, endDate: any): any {

    if (startDate === undefined) return data;
    else if (endDate === undefined) return data;
    else {
      startDate = new Date(startDate).getTime();
      endDate = new Date(endDate).getTime();
    }

    return data.filter(function(formatDate) {
      return formatDate.tranxDate <= (endDate + 86400000) && formatDate.tranxDate >= startDate;
    })
  }

}
