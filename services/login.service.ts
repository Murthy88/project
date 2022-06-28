import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { LoginModel } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


public url="https://saapi.azaz.com/api/AdminLogins/login"
// public userlist:any[]=[];
  constructor(private http:HttpClient) {}
//     this. http.get(this.url).subscribe((res:any)=>{
//       this.userlist=res;
//     })
//   }
//   sigin(username:any,password:any){
//     var i:any;
//     for(i=0;i<this.userlist.length;i++){
//       if(this.userlist[i].aUsername==username && this.userlist[i].aPassword==password){
//         console.log(this.userlist)
//         return true
//       }
//     }
// return false
//   }
  // sigin(username:any,password:any){
  //   if(username == "admin" && password == "admin"){
  //     return true
  //   }else{
  //     return false
  //   }

  // }
  // sigin(model:LoginModel){

  //   return this.http.get('http://saapi.azaz.com/api/AdminLogins')
  // // }


  sigin (model: LoginModel) {
    const headersValue = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(this.url,model, headersValue);
  }


}
