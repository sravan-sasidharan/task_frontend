import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ApiserviceService } from '../services/apiservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  searchTerm = new BehaviorSubject("")
  dataList : any = []
  searchItem:any;
  constructor(private web:ApiserviceService) { }

  ngOnInit(): void {
this.fetchData();
this.searchTerm.subscribe((data:any) => {
  this.searchItem = data;
  
})
  }

  search(event:any){
    let searchValue=event.target.value;
    this.searchTerm.next(searchValue);
  }
fetchData(){
  
  this.web.getAllJob().subscribe(res=>{
    console.log(res);
    this.dataList =res
    console.log(this.dataList[0].hired);
    const percentage=(parseInt(this.dataList.hired) / parseInt(this.dataList.required ) )*100;
    console.log(percentage);
    
    
  })
}

  async deleteJob(id:Number){
    if(confirm("Are you sure to delete ")) {
    let result=await this.web.deleteJob(id)
    if(result){
      // alert("delete succesfull");
      // this.toastr.success('deleted successfully','title');
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'deleted',
        showConfirmButton: false,
        timer: 1500
      })
      this.fetchData()
    }

    }
    
    

  }

}
