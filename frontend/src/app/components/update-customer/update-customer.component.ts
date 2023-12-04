import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent {

  updateCustomerForm!:FormGroup;

  id:number=this.activateRoute.snapshot.params['id']
  constructor(private activateRoute: ActivatedRoute,
    private service:CustomerService,
    private fb: FormBuilder,
    private router:Router){}

    ngOnInit(){
      this.updateCustomerForm = this.fb.group({
        name:[null,Validators.required],
        email:[null,[Validators.required,Validators.email]],
        phone:[null,Validators.required],
      })
      this.getCustomerById()
    }

    getCustomerById(){
      this.service.getCustomerById(this.id).subscribe((res)=>{
        console.log(res);
        this.updateCustomerForm.patchValue(res);
        
      })
    }

    updateCustomer(){
      this.service.updateCustomer(this.id,this.updateCustomerForm.value).subscribe((res)=>{
        console.log(res);
        this.router.navigateByUrl("")
      })
    }


}
