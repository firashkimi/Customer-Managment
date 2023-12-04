import { Component } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent {

  customers:any = []

  constructor(private service:CustomerService){}

  ngOnInit(){
    this.getAllCustomers()
  }

  getAllCustomers() {
    this.service.getAllCustomers().subscribe((res)=>{
      console.log(res);
      this.customers= res
      
    })
  }

  deleteCustomer(id:number){
    console.log(id);
    this.service.deleteCustomer(id).subscribe((res)=>{
      console.log(res);
      this.getAllCustomers()
      
    })
    

  }

}
