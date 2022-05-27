import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.css']
})
export class AddroleComponent implements OnInit {
  public Roleform!:FormGroup
getroles:any;
rolesid:any;
  constructor(private service:LoginService,private builder:FormBuilder,private route:Router ) { }

  ngOnInit(): void {
    this.Roleform=this.builder.group({
      Rolename:['',Validators.required ],
      roletype:['',Validators.required ],
      RoleStatus:['',Validators.required ],
      Roleuniqid:['',Validators.required ],
      Roleid:['',Validators.required ]
    })
  }
SaveRoles(){
  const obj={
    "action": "A",
  "role_Id": 0,
  "role_Name":this.Roleform.value.Rolename,
  "role_Type":this.Roleform.value. roletype ,
  "role_Uniqid":this.Roleform.value.Roleuniqid,
  "role_Status":this.Roleform.value.RoleStatus,
  "role_Created_UserId": 0
  }
  this.service.SaveRoles(obj).subscribe((res:any)=>{
console.log(res)
if(res==1){
  alert("add Role")
  this.route.navigate(['admin']);
}
  })

}

}
