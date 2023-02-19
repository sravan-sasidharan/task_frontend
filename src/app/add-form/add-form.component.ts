import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
 
addForm=this.fb.group({
  name:['',[Validators.required]],
  lastdate:['',[Validators.required]],
  required:[null,[Validators.required,Validators.pattern('[0-9]*')]],
  hired:[null,[Validators.pattern('[0-9]*')]],
  applicants:[null,[Validators.pattern('[0-9]*')]],
  budget:[null,[Validators.required,Validators.pattern('[0-9]*')]]
})


  constructor(private fb:FormBuilder, private web:ApiserviceService,private router:Router) { }

  ngOnInit(): void {
  }


  async submit(){

    let payload={
      name:this.addForm.value.name,
      required:Number(this.addForm.value.required),
      hired:Number(this.addForm.value.hired),
      applicants:Number(this.addForm.value.applicants),
      budget:Number(this.addForm.value.budget),
      lastDate:this.addForm.value.lastdate
    }
    console.log(payload);
    let result=await this.web.createJob(payload);
    if(result){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'added successfully',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl('');
      
    }
  }

}
