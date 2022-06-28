import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddroleComponent } from '../role/addrole/addrole.component';
import { AdditemComponent } from '../items/additem/additem.component';
import { AdduserComponent } from '../user/adduser/adduser.component';
import { AddprivilagesComponent } from '../privilage/addprivilages/addprivilages.component';
import { AdditemgroupComponent } from '../group/additemgroup/additemgroup.component';
import { AddpriceComponent } from '../price/addprice/addprice.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router, private dialog:MatDialog) { }

  ngOnInit(): void {
  }
logout(){

this.route.navigate(['login'])
localStorage.removeItem('key')
localStorage.clear()
}
view(){
this.dialog.open(AddroleComponent)
}
additem(){
  this.dialog.open(AdditemComponent)
}
adduser(){
  this.dialog.open(AdduserComponent)
}
addprivilage(){
  this.dialog.open(AddprivilagesComponent)
}
addigrp(){
  this.dialog.open(AdditemgroupComponent)
}
addprice(){
  this.dialog.open(AddpriceComponent)
}
}
