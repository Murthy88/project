import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  userdata:any;
  id:any;
public date=new Date()
  UserEditform=this.bulider.group({
    id:[''],
    username:[''],
    password:[''],
    userstatus:['']
  })
  constructor(private service:UserService,private bulider:FormBuilder,private active:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.active.params.subscribe((res:any)=>{
      this.userdata=res.id,
      console.log(this.userdata)
    })
    this.service.userid(this.userdata).subscribe((res:any)=>{
      console.log(res)
      this.UserEditform=new FormGroup({
        id:new FormControl(res['aId']),
        username:new FormControl(res['aUsername']),
        password:new FormControl(res['aPassword']),
        userstatus:new FormControl(res['aStatus'])
      })
    })
  }
saveuser(){
  this.id=this.active.snapshot.params['id'];
  console.log(this.id)
  const obj={
    "aId": this.id,
    "aUsername":this.UserEditform.value.username,
    "aPassword": this.UserEditform.value.password,
    "aStatus": this.UserEditform.value.userstatus,
    "aTs":this.date,
  }
this.service.edituser(this.userdata,obj).subscribe((res:any)=>{
  console.log(res);
  alert('user updated')
  this.route.navigate(['home'])
})

}

}
