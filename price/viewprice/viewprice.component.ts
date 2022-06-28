import { Component, OnInit } from '@angular/core';
import { PriceService } from 'src/app/services/price.service';
import { MatDialog } from '@angular/material/dialog';
import { AddpriceComponent } from '../addprice/addprice.component';
@Component({
  selector: 'app-viewprice',
  templateUrl: './viewprice.component.html',
  styleUrls: ['./viewprice.component.css']
})
export class ViewpriceComponent implements OnInit {
  lists:any;
  serachtext:any;
  constructor(private service:PriceService,private dilog:MatDialog) {
    
   }
view(){
  this.service.viewprice().subscribe((res:any)=>{
    this.lists=res;
    console.log(this.lists)
  })
}
  ngOnInit(): void {
    this.view();
  }
pricedelete(id:any){
  this.service.deleteid(id).subscribe((res:any)=>{
    console.log(res);
    this.ngOnInit();
    alert('Price details are deleted')
    
  })
}
add(){
  this.dilog.open(AddpriceComponent)
}
}
