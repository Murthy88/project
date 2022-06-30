import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';
import { MatDialog } from '@angular/material/dialog';
import { AdditemComponent } from '../additem/additem.component';

@Component({
  selector: 'app-viewitem',
  templateUrl: './viewitem.component.html',
  styleUrls: ['./viewitem.component.css']
})
export class ViewitemComponent implements OnInit {
  items:any;
  serachtext:any;
  constructor(private svr:ItemsService, private route:Router,private dilog:MatDialog) {

   }
view(){
  this.svr.viewitem().subscribe((res:any)=>{
    this.items=res;

  })
}
  ngOnInit(): void {
    this.view();
  }
deleteid(id:any){
return this.svr.deleteitem(id).subscribe((res:any)=>{
  console.log(res);
  alert("delete item")
this.ngOnInit();
})
}
add(){
  this.dilog.open(AdditemComponent)
}

}
