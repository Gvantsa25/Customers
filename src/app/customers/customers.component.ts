import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../customers/customers.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customer: Customer | undefined;

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService) { }

  async ngOnInit(): Promise<void> {
    const id = this.activatedRoute.snapshot.queryParamMap.get('id');
    this.customer = await this.customerService.getCustomerDetails(Number(id));
  }

}
