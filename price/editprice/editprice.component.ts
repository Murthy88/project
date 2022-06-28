import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-editprice',
  templateUrl: './editprice.component.html',
  styleUrls: ['./editprice.component.css']
})
export class EditpriceComponent implements OnInit {
  list:any;
  id:any;
  public date=new Date();
Editform =this.bulider.group({
  id:[''],
  mrp:[''],
  marketprice:[''],
  discount:[''],
  startDate:[''],
  endDate:[''],
  status:['']
})
  constructor(private bulider:FormBuilder,private service:PriceService,private active:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.active.params.subscribe((res:any)=>{
      this.list=res.id;
      console.log(this.list)

    })
    this.service.viewone(this.list).subscribe((res:any)=>{
      console.log(res)
      this.Editform=new FormGroup({
        id:new FormControl(res['ipdId']),
        mrp:new FormControl(res['ipdMrp']),
        marketprice:new FormControl(res['ipdMarketPrice']),
        discount:new FormControl(res['ipdDiscount']),
        startDate:new FormControl(res['ipdStartDate']),
        endDate:new FormControl(res['ipdEndDate']),
        status:new FormControl(res['ipdStatus'])
      })
    })
  }
saveprice(){
  this.id=this.active.snapshot.params['id']
  console.log(this.id)
  const obj={
    "ipdId": this.id,
    "ipdMrp": this.Editform.value.mrp,
    "ipdMarketPrice": this.Editform.value.marketprice,
    "ipdDiscount": this.Editform.value.discount,
    "ipdStartDate":this.Editform.value.startDate,
    "ipdEndDate":this.Editform.value.endDate ,
    "ipdStatus": this.Editform.value.status,
    "ipdTs": this.date,
  }
  this.service.editprice(this.list,obj).subscribe((res:any)=>{
    console.log(res);
    alert('price details Edit')
    this.route.navigate(['home'])
  })
}
}
