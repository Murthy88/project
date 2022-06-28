import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  public date=new Date();
  url:any='';

imageurl="https://saapi.azaz.com/"
  selectImage: any;
  data: any;

  constructor(private srv:ItemsService,private bulider:FormBuilder,private route:Router) { }

  ngOnInit(): void {
  }
  selectFile(event:any){
if(event.target.files && event.target.files[0]){
  var reader=new FileReader();
  reader.onload=(event:any)=>
  this.url=event.target.result;
  reader.readAsDataURL(event.target.files[0]);
  this.selectImage=event.target.files[0];

}
this.upload();
  }
upload(){
this.srv.upload(this.selectImage).subscribe((res:any)=>{
  this.data=res
  console.log(this.data);
  alert('upload image ')
})
}





  itemform=this.bulider.group({
    itemname:['',Validators.required],
    itemDesc:['',Validators.required],
    itemstatus:['',Validators.required],
    itemimage:['',Validators.required]
  })
  items(){
    const obj={
      "iId": 0,
  "iName":this.itemform.value.itemname,
  "iIgId":1,
  "iDesc":this.itemform.value.itemDesc,
  "iImage":this.imageurl+this.data.dbPath,
  "iStatus":this.itemform.value.itemstatus,
  "iTs":this.date
    }
    this.srv.additems(obj).subscribe((data:any)=>{
      console.log(data)
        alert('Add Item')
        this.route.navigate(['home'])

    })
  }

}
