import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';
import { MatDialog } from '@angular/material/dialog';
import { EditroleComponent } from '../editrole/editrole.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewrole',
  templateUrl: './viewrole.component.html',
  styleUrls: ['./viewrole.component.css']
})
export class ViewroleComponent implements OnInit {
view:any;
serachtext:any;

  constructor(private service:RoleService,private dialog:MatDialog,private route:Router,) {
   
  }
views(){
  this.service.viewrole().subscribe((res:any)=>{
    console.log(res);
    this.view=res;
  })
}
  ngOnInit(): void {
    this.views();
  }
  deleterole(id:any){
    this.service.deleteid(id).subscribe((res:any)=>{
      console.log(res)
      this.ngOnInit();
      alert("deleted Sucessful")
    

    })
  }
  add(){
    this.dialog.open(EditroleComponent)
  }
}
