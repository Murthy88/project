import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.css']
})
export class AddroleComponent implements OnInit {


public date=new Date();


  constructor(private service:RoleService, private bulider:FormBuilder,private route:Router,) { }

  ngOnInit():void{

  }
  Roleform=this.bulider.group({
    firstname:['',Validators.required],
    rolestatus:['',Validators.required]
  })
role(){

  const obj={
    "arId":0,
    "arName":this.Roleform.value.firstname,
    "arStatus":this.Roleform.value.rolestatus,
    "arTs":this.date,
  }
  this.service.addrole(obj).subscribe((res:any)=>{
    console.log(res)
    alert("add role")
    this.route.navigate(['home'])

  })
}

}
