import { Pipe, PipeTransform } from '@angular/core';
import { customerData, Transactions } from './data.modal';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(allCustomerData: customerData[], searchTerm: string): customerData[] {
    if (!allCustomerData || !searchTerm) {
      return allCustomerData;
    }

    const searchTermInLowerCase = searchTerm.toLowerCase();
    
    return allCustomerData.filter((item) => {
      const name = item.name.toLowerCase().includes(searchTermInLowerCase);
      const amount = item.transactions.some((transaction: Transactions) =>
        transaction.amount.toString().includes(searchTermInLowerCase)
      );
      return name || amount;
    });
  }

}


