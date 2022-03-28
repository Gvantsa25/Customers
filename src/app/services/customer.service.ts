import { Injectable } from '@angular/core';
import { CustomerSlim, Customer} from '../customers/customers.model'
import { default as customerDetails } from '../../customer-details.json';
import { default as customerList } from '../../customer-list.json';

@Injectable({
  providedIn: 'root'
})


export class CustomerService {
  
  constructor() { }

  getCustomerDetails(id: number): Promise<Customer | undefined> {
    return new Promise((resolve) => {
      return resolve(customerDetails.find(custom => custom.id === id));
    });
  }

  getCustomerList(): Promise<CustomerSlim[]> {
    return new Promise((resolve) => {
      return resolve(customerList);
    });
  }

  
}
