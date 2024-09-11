import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpserviceService } from '../httpservice.service';
import { Employee } from '../employee/employee.module';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  empData:Employee=<Employee>{};
  constructor(private route:ActivatedRoute,
              private service:HttpserviceService){}
  ngOnInit(): void {
    this.getDataFromUrl();
  }

  getDataFromUrl(){
    this.route.paramMap.subscribe((param)=>{this.service.getParticularDataById(param.get("id")).subscribe((Response)=>{console.log(Response)})
    })
  }


  
}
