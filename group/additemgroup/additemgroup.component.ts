import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemgrpService } from 'src/app/services/itemgrp.service';

@Component({
  selector: 'app-additemgroup',
  templateUrl: './additemgroup.component.html',
  styleUrls: ['./additemgroup.component.css']
})
export class AdditemgroupComponent implements OnInit {
public date=new Date();
  constructor(private bulider:FormBuilder,private svr:ItemgrpService, private route:Router) { }

  ngOnInit(): void {
  }
groupform=this.bulider.group({
  itemgroupname:['',Validators.required],
  itemgroupstatus:['',Validators.required]
})
group(){
  const obj={
    "igId": 0,
    "igName":this.groupform.value.itemgroupname,
    "igStatus": this.groupform.value.itemgroupstatus,
    "igTs":this.date
  }
  this.svr.addgrp(obj).subscribe((res:any)=>{
    console.log(res);
    alert('Add itemgroup')
    this.route.navigate(['home'])
  })
}
}
