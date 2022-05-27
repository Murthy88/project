import { Component, OnInit } from '@angular/core';
import { UserlistService } from 'src/app/services/userlist.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  lists:any=[];
  p:number=1;
  serachtext:any;
  constructor(private service:UserlistService) { }

  ngOnInit(): void {
this.userlist();

  }
  userlist(){
    const obj={
      "userId": 0
    }

  this.service.userlist(obj).subscribe((res:any)=>{
console.log(res);
this.lists= res;

  })
}
// deletec(c:any){
// this.list.splice(c.user_Id,1)
// this.service.deletec(c).subscribe((res:any)=>{
//   console.log(res);
// })
// }
 deleteuser(user_Id:number){
   this.service.deleteuser(user_Id).subscribe((res:any)=>{
     console.log(res)
   })
       alert("User delete successfully")




 }

}

