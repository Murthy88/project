import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {
   public itemlist:any
   id:any;
   public date=new Date();
  Editform=this.bulider.group({
    id:[''],
    Itemname:[''],
    Itemstatus:[''],
    itemdesc:[''],
    itemgid:['']
  })
  constructor(private svr:ItemsService,private bulider:FormBuilder,private active:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.active.params.subscribe((res:any)=>{
this.itemlist=res.id;
console.log(this.itemlist)
    })
    this.svr.itemid(this.itemlist).subscribe((res:any)=>{
      console.log(res)
      this.Editform=new FormGroup({
        id:new FormControl(res['iId']),
        Itemname:new FormControl(res['iName']),
        Itemstatus:new FormControl(res['iStatus']),
        itemdesc:new FormControl(res['iDesc']),
        itemgid:new FormControl(res['iIgId'])
      })
    })
  }

saveitem(){
  this.id=this.active.snapshot.params['id'];
  console.log(this.id)
  const obj={
    "iId": this.id,
    "iName": this.Editform.value.Itemname,
    "iIgId": this.Editform.value. itemgid,
    "iDesc":this.Editform.value.itemdesc,
    "iStatus": this.Editform.value.Itemstatus,
    "iTs": this.date,
  }
  this.svr.edititem(this.itemlist,obj).subscribe((res:any)=>{
    console.log(res);

      alert("Item updated")
    this.router.navigate(['home'])

  })

}
}
