import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

empdata:any[]=[];
isSelect:boolean=false;
recordid!:number
constructor(private service:HttpserviceService,
            private router:Router,
            private route:ActivatedRoute 
){}
  ngOnInit(): void {
      this.GetAllRecordFromBackend();
      this.GetAllRecordFromUrl();
  }

  GetAllRecordFromUrl(){
    this.route.paramMap.subscribe((param:any)=>{
      this.service.getParticularDataById(param.get("id")).subscribe((response:any)=>{
        this.empdata=response;
      })
    })
  }

  GetAllRecordFromBackend(){
    this.service.getAllRecords().subscribe((Response:any)=>{this.empdata=Response});
  }

  onEdit(id:any){
    console.log(id);
    this.isSelect=true;
    this.recordid=id;
  }

  onUpdate(){
    if(this.isSelect){
      this.router.navigate(['/addemployee',this.recordid]);
    }else{
      alert("Please Select a record to update....")
    }
  }

  onDelete(){
    if(this.isSelect){

      if(confirm("Do you want to Delete this record")){
        this.service.deleteData(this.recordid).subscribe((responce)=>{this.GetAllRecordFromBackend();alert(responce)})
      }else{
        alert("Record is not Deleted....")
      }

      
    }else{
      alert("Please Selete a record to Delete...")
    }
  }

}
