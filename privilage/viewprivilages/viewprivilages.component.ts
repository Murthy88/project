import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrivilagesService } from 'src/app/services/privilages.service';
import { MatDialog } from '@angular/material/dialog';
import { AddprivilagesComponent } from '../addprivilages/addprivilages.component';
@Component({
  selector: 'app-viewprivilages',
  templateUrl: './viewprivilages.component.html',
  styleUrls: ['./viewprivilages.component.css']
})
export class ViewprivilagesComponent implements OnInit {
list:any;
serachtext:any;
  constructor(private service:PrivilagesService,private route:Router,private dialog:MatDialog) {
    
  }
view(){
  this.service.viewprivilage().subscribe((res:any)=>{
    console.log(res);
    this.list=res;
  })
}
  ngOnInit(): void {
    this.view();
  }
deleteid(id:any){
  this.service.delete(id).subscribe((res:any)=>{
    console.log(res);
    alert('delete privilage')
    this.ngOnInit();
  })
}
add(){
  this.dialog.open(AddprivilagesComponent)
}
}
