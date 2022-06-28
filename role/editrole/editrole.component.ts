import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';
import { FormGroup,FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editrole',
  templateUrl: './editrole.component.html',
  styleUrls: ['./editrole.component.css']
})
export class EditroleComponent implements OnInit {
  userdata: any;
  id:any;
  public date=new Date();
  Editform=this.bulider.group({
    id:[''],
    Rolename:[''],
    Rolestatus:['']
  })

  constructor(private service:RoleService,private route:ActivatedRoute,private bulider:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      this.userdata=res.id;
      console.log(this.userdata)
    })
    this.service.viewone(this.userdata).subscribe((res:any)=>{
      console.log(res)
      this.Editform=new FormGroup({
        id:new FormControl(res['arId']),
        Rolename:new FormControl(res['arName']),
        Rolestatus:new FormControl(res['arStatus'])

      })
    })
  }




save(){
  this.id=this.route.snapshot.params['id'];
  console.log(this.id)
  const obj={
    "arId": this.id,
  "arName": this.Editform.value.Rolename,
  "arStatus":this.Editform.value.Rolestatus ,
  "arTs":this.date,
  }
  this.service.editrole(this.userdata,obj).subscribe((res:any)=>{
    console.log(res);

      alert("role updated")
    this.router.navigate(['home'])

  })

}

}
