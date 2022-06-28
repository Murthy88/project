import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
public date=new Date()
  role: any;
  constructor(private svr:UserService,private bulider:FormBuilder,private route:Router) { }

  ngOnInit(): void {
  }
userform=this.bulider.group({
  username:['',Validators.required],
  password:['',Validators.required],
  role:['',Validators.required],
  userstatus:['',Validators.required]
})
user(){
  const obj={
    "aId": 0,
  "aUsername":this.userform.value.username ,
  "aPassword":this.userform.value.password ,
  "aArId": this.userform.value.role,
  "aStatus":this.userform.value.userstatus ,
  "aTs":this.date
  }
  this.svr.adduser(obj).subscribe((res:any)=>{
    console.log(res)
      alert('user added')
      this.route.navigate(['home'])

  })
}
change(data:any){
  console.log(data.target.value)
  this.role=data.target.value
}
}

