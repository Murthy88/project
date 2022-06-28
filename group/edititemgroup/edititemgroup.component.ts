import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemgrpService } from 'src/app/services/itemgrp.service';

@Component({
  selector: 'app-edititemgroup',
  templateUrl: './edititemgroup.component.html',
  styleUrls: ['./edititemgroup.component.css']
})
export class EdititemgroupComponent implements OnInit {
  itemgroup:any;
  id:any;
  public date=new Date();
  itgrpditform=this.bulider.group({
    id:[''],
    iteamgrpname:[''],
    iteamgrpstatus:['']
  })
  constructor(private svr:ItemgrpService,private bulider:FormBuilder,private active:ActivatedRoute,private rote:Router) { }

  ngOnInit(): void {
    this.active.params.subscribe((res:any)=>{
      this.itemgroup=res.id;
      console.log(this.itemgroup)
    })
    this.svr.groupid(this.itemgroup).subscribe((res:any)=>{
      console.log(res);
      this.itgrpditform=new FormGroup({
        id:new FormControl(res['igId']),
        iteamgrpname:new FormControl(res['igName']),
        iteamgrpstatus:new FormControl(res['igStatus'])
      })
    })
  }
editgrp(){
  this.id=this.active.snapshot.params['id']
  console.log(this.id)
  const obj={
    "igId": this.id,
  "igName": this.itgrpditform.value.iteamgrpname,
  "igStatus": this.itgrpditform.value.iteamgrpstatus,
  "igTs":this.date,
  }
  this.svr.edit(this.itemgroup,obj).subscribe((res:any)=>{
    console.log(res);
    alert('edit itemgroup')
    this.rote.navigate(['home'])
  })
}

}
