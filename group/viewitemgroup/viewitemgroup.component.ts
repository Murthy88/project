import { Component, OnInit } from '@angular/core';
import { ItemgrpService } from 'src/app/services/itemgrp.service';
import { MatDialog } from '@angular/material/dialog';
import { AdditemgroupComponent } from '../additemgroup/additemgroup.component';

@Component({
  selector: 'app-viewitemgroup',
  templateUrl: './viewitemgroup.component.html',
  styleUrls: ['./viewitemgroup.component.css']
})
export class ViewitemgroupComponent implements OnInit {
grp:any;
serachtext:any;
  constructor(private service:ItemgrpService,private dilog:MatDialog) {
   
   }
view(){
  this.service.viewigrp().subscribe((res:any)=>{
    console.log(res);
    this.grp=res;
  })
}
  ngOnInit(): void {
    this.view();
  }
deleteid(id:any){
  this.service.delete(id).subscribe((res:any)=>{
    console.log(res)
    alert('itemgroup deleted')
    this.ngOnInit();
  })
}
add(){
  return this.dilog.open(AdditemgroupComponent)
}
}
