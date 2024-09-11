import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { Employee } from '../employee/employee.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  addData:Employee=<Employee>{};
  allcountry:any[]=[];
  isUpdate:boolean=false;
  constructor(private service:HttpserviceService,
                private router:Router){}

  ngOnInit(): void {
    this.GetAllCountry();
  }

  GetAllCountry(){
    this.service.getAllCountry().subscribe((response:any)=>{this.allcountry=response;})
  }

  onSubmit(){
      if(this.isUpdate){
        this.addData.updatedby="Admin";
        this.addData.updateddtm=Date.now();
        this.service.updateData(this.addData).subscribe((responce)=>{this.router.navigate([''])})
      }else{
        this.addData.createdby="Admin";
        this.addData.createddtm=Date.now();
        this.addData.updatedby="Admin";
        this.addData.updateddtm=Date.now();
    
        this.service.PostEmpData(this.addData)
        .subscribe((response)=>{
          console.log(response);
          this.router.navigate([""]);
        })
      }
  }

}
