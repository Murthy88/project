import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserlistService } from 'src/app/services/userlist.service';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.css']
})
export class EditdetailsComponent implements OnInit {
url:string='';
userdata: any;
selectdImage:any=null;
Editform=new FormGroup({
  FirstName:new FormControl(''),
  lastName:new FormControl(''),
  Email:new FormControl(''),
  PhoneNumber:new FormControl(''),
  Address:new FormControl(''),
  Mapaddresslink:new FormControl(''),
  Username:new FormControl(''),
  password:new FormControl(''),
  IsAdmin:new FormControl(''),
  usertype:new FormControl(''),


})

  constructor( private service:UserlistService ,private route:ActivatedRoute) {}

  ngOnInit(): void {
this.Editformfile();
  }
  Editformfile(){
     var id=this.route.snapshot.paramMap.get("id");
     console.log(id)
     const obj={
      "userId": id,
     }
     console.log(obj);
     this.service.userlist(obj).subscribe((res:any)=>{
       this.userdata=res;
       console.log(this.userdata);
       console.log(this.userdata[0]);

       this.Editform.controls["FirstName"].setValue(this.userdata[0].user_Firstname);
       this.Editform.controls["lastName"].setValue(this.userdata[0].user_Lastname);
       this.Editform.controls["Email"].setValue(this.userdata[0].user_Email);
       this.Editform.controls["PhoneNumber"].setValue(this.userdata[0].user_Phone);
       this.Editform.controls["Address"].setValue(this.userdata[0].user_Address);
       this.Editform.controls["Mapaddresslink"].setValue(this.userdata[0].user_Mapaddresslink);
       this.Editform.controls["Username"].setValue(this.userdata[0].user_Username);
       this.Editform.controls["password"].setValue(this.userdata[0].uE_Password);
       this.Editform.controls["IsAdmin"].setValue(this.userdata[0].user_IsAdmin);
       this.Editform.controls["usertype"].setValue(this.userdata[0].user_Type);
     })
  }
  save(){
    var User=this.route.snapshot.paramMap.get('id')
    const obj={
      "action": "U",
      "user_Id": User,
      "user_Firstname": this.Editform.value.FirstName,
      "user_Lastname":this.Editform.value.lastName,
      "user_Phone": this.Editform.value.PhoneNumber,
      "user_Email": this.Editform.value.Email,
      "user_Address": this.Editform.value.Address,
      "user_Mapaddresslink": this.Editform.value.Mapaddresslink,
      "user_Username":this.Editform.value. Username,
      "uE_Password":this.Editform.value. password,
      "user_Profileimage": "",
      "user_Roleid": 102,
      "user_IsAdmin": this.Editform.value.IsAdmin,
      "user_Type":  this.Editform.value.usertype,
      "user_Status": "",
      "user_Created_Userid": 1,
      "err_no": 0
    }
    this.service.userlist(obj).subscribe((res:any)=>{
      console.log(res);
      if(res==1){
        alert('user updated successfully');
      }else{
        alert('alredy existed')
      }
    })
    console.log(this.Editform.value)
    alert('user updated successfully')
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
