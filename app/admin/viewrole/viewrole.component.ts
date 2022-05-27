import { Component, OnInit } from '@angular/core';
import { UserlistService } from 'src/app/services/userlist.service';
@Component({
  selector: 'app-viewrole',
  templateUrl: './viewrole.component.html',
  styleUrls: ['./viewrole.component.css']
})
export class ViewroleComponent implements OnInit {
Roles:any
p:number=1;
  constructor(public service:UserlistService) { }

  ngOnInit(): void {
this.rolelist();

  }
    rolelist(){
      const obj={
        "expression": "",
        "sortby": "",
        "rowno": 0
      }
      this.service.rolelist(obj).subscribe((res:any)=>{
        console.log(res)
        this.Roles=res;
      })
    }

}
