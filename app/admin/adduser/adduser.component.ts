import {  Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
   public signupform!:FormGroup
  getUserbyId:any;
  UserId:any;
  url:string='';
  selectdImage:any=null;


  constructor( private login:LoginService, private builder:FormBuilder,private route:Router,  ) { }

  ngOnInit(): void {

this.signupform=this.builder.group({
  firstname:['',Validators.required],
  lastname:['',Validators.required],
  username:['',Validators.required],
  password:['',Validators.required],
  isadmin:['',Validators.required],
  profileimage:['',Validators.required],
  address:['',Validators.required],
  usertype:['',Validators.required],
  phonenumber:['',Validators.required],
  Mapaddresslink:['',Validators.required],
  Email:['',Validators.required],


});
  }
SaveUser(){

  const obj= {

    "action": "A",
    "user_Id": 0,
    "user_Firstname":this.signupform.value.firstname,
    "user_Lastname": this.signupform.value.lastname,
    "user_Phone": this.signupform.value.phonenumber,
    "user_Email": this.signupform.value.Email,
    "user_Address": this.signupform.value.address,
    "user_Mapaddresslink": this.signupform.value.Mapaddresslink,
    "user_Username":this.signupform.value.username,
    "uE_Password": this.signupform.value.password,
    "user_Profileimage": this.signupform.value.profileimage,
    "user_Roleid": 102,
    "user_IsAdmin": this.signupform.value.isadmin,
    "user_Type": this.signupform.value.usertype,
    "user_Status": "Y",
    "user_Created_Userid": 1,
    "err_no": 0
  }
  this.login.SaveUser(obj).subscribe((res:any) => {
    console.log(res);
    if(res==1){
      alert("add user")
      this.route.navigate(['admin']);
    }

  });

}
onselectfile(event: any){
  if(event.target.files &&event.target.files[0]){
     var Reader=new FileReader();
    Reader.onload=(e:any)=>this.url=e.target.result
    Reader.readAsDataURL(event.target.files[0]);
    this.selectdImage=event.target.files[0];
  }
  }
}
