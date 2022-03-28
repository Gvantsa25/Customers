import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerSlim} from '../customers/customers.model'
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customers: CustomerSlim[] = [];

  constructor(private customerService: CustomerService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.customers = await this.customerService.getCustomerList();
  }

  customerDetail(customer: CustomerSlim) {
    this.router.navigate(['customer'],
      {
        queryParams: { id: customer.id }
      }
    )
  }

}
