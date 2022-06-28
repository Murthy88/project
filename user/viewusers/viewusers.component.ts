import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { AdduserComponent } from '../adduser/adduser.component';
@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {
views:any;
serachtext:any;
  constructor(private svr:UserService,private route:Router,private dialog:MatDialog) {
   
   }
   view(){
    this.svr.viewuser().subscribe((res:any)=>{
      console.log(res);
      this.views=res;
    })
   }

  ngOnInit(): void {
    this.view();
  }
deleteuser(id:any){
  this.svr.delete(id).subscribe((res:any)=>{
console.log(res);
this.ngOnInit();
alert('user deleted')

  })
}
add(){
  this.dialog.open(AdduserComponent)
}
}
