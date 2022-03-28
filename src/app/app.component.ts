import { Component} from '@angular/core';
// import { Router } from '@angular/router';
// import { CustomerSlim, Customer } from './customers/customers.model'
// import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  // customers: CustomerSlim[] = [];

  // constructor(private customerService: CustomerService, private router: Router){}

  // async ngOnInit(): Promise<void> {
  //   this.customers = await this.customerService.getCustomerList();
  // }

  // customerDetail(customer: CustomerSlim){
  //   this.router.navigate(['customer'],
  //   {
  //     queryParams: {id: customer.id}
  //   }
  //   )
  // }
}
