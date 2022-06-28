import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrivilagesService } from 'src/app/services/privilages.service';

@Component({
  selector: 'app-addprivilages',
  templateUrl: './addprivilages.component.html',
  styleUrls: ['./addprivilages.component.css']
})
export class AddprivilagesComponent implements OnInit {
public date=new Date();
  constructor(private bulider:FormBuilder,private service:PrivilagesService,private route:Router) { }

  ngOnInit(): void {
  }
privilageform=this.bulider.group({
  privilageroleid:['',Validators.required],
  privilagestatus:['',Validators.required]
})
add(){
  const obj={
    "apId": 0,
  "apArId": this.privilageform.value.privilageroleid,
  "apStatus": this.privilageform.value.privilagestatus,
  "apTs": this.date,
  }
  this.service.addprivilage(obj).subscribe((res:any)=>{
    console.log(res)
    alert('add privilage')
    this.route.navigate(['home'])
  })
}
}
