import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PrivilagesService } from 'src/app/services/privilages.service';

@Component({
  selector: 'app-editprivilages',
  templateUrl: './editprivilages.component.html',
  styleUrls: ['./editprivilages.component.css']
})
export class EditprivilagesComponent implements OnInit {
  list:any;
  id:any;
  public date=new Date();
  Editform=this.bulider.group({
    id:[''],
    privilageroleid:[''],
    privilagerolestatus:['']
  })
  constructor(private service:PrivilagesService,private bulider:FormBuilder,private active:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.active.params.subscribe((res:any)=>{
      this.list=res.id,
      console.log(this.list)
    })
    this.service.privilageid(this.list).subscribe((data:any)=>{
      console.log(data)
      this.Editform=new FormGroup({
       id:new FormControl(data['apId']),
       privilageroleid:new FormControl(data['apArId']),
       privilagerolestatus:new FormControl(data['apStatus'])

      })
    })
  }
save(){
  this.id=this.active.snapshot.params['id'];
  console.log(this.id)
  const obj={
    "apId": this.id,
    "apArId": this.Editform.value.privilageroleid,
    "apStatus": this.Editform.value.privilagerolestatus,
    "apTs": this.date
  }
  this.service.editprivilage(this.list,obj).subscribe((res:any)=>{
    console.log(res);
    alert('updated  Sucessfully')
    this.route.navigate(['home'])
  })
}
}
