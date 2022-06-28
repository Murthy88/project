import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-addprice',
  templateUrl: './addprice.component.html',
  styleUrls: ['./addprice.component.css']
})
export class AddpriceComponent implements OnInit {
public date=new Date();
  constructor(private bulider:FormBuilder,private service:PriceService) { }

  ngOnInit(): void {
  }
priceform=this.bulider.group({
  mrp:['',Validators.required],
  marketprice:['',Validators.required],
  discount:['',Validators.required],
  startdate:['',Validators.required],
  enddate:['',Validators.required],
  status:['',Validators.required],
  piid:['',Validators.required]
})
addprice(){
  const obj={
    "ipdId": 0,
    "ipdIId": this.priceform.value.piid,
    "ipdMrp": this.priceform.value.mrp,
    "ipdMarketPrice": this.priceform.value.marketprice,
    "ipdDiscount": this.priceform.value.discount,
    "ipdStartDate": this.priceform.value.startdate,
    "ipdEndDate": this.priceform.value.enddate,
    "ipdStatus": this.priceform.value.status,
    "ipdTs": this.date,
  }
 this.service.add(obj).subscribe((res:any)=>{
  console.log(res)
  alert('Add price details')
 })
}
}
