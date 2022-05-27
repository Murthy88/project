import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { LoginModel } from 'src/models/login';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userId:any;
  constructor(private service:LoginService,private bulider:FormBuilder,private route:Router) { }

  ngOnInit(): void {

  }
 loginForm=this.bulider.group({
   username:[''],
   password:['']
 })
 login(){
  const loginModel = new LoginModel(this.loginForm.controls['username'].value,
  this.loginForm.controls['password'].value);
this.service
.login(loginModel)
.subscribe((res: any) => {
console.log(res);
if(res=='')
{
alert("Login Failed");
}
else
{
alert("Login Sucessful");
this.userId=res[0].userId;
console.log(this.userId);
this.getUserById(this.userId)
this.route.navigate(['admin'])

}
localStorage.setItem('key',this.loginForm.controls['username'].value)
});
 }
 getUserById(input:any)
  {
    const obj={
      "userId": input
    }
    this.service.getUserbyId(obj).subscribe((res:any)=>{
      console.log(res);
    });
  }
}
