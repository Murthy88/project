import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
const headersData = {
  headers: new HttpHeaders({
    'Content-Type':'application/json; charset=utf-8',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class UserlistService {
  user_Firstname: any;
  deletec(c: any) {
    throw new Error('Method not implemented.');
  }
  URL:string='http://saapi.azaz.com/api/UserDetails/GetUserbyId'
baseURL:string='http://saapi.azaz.com/api'
  constructor( private http:HttpClient) { }

userlist(obj:any){
  return this.http.post(this.URL,
    JSON.stringify(obj),
    headersData)

}
deleteuser(user_Id:number){
return this.http.delete<any>("http://saapi.azaz.com/api/UserDetails"+user_Id)
}
rolelist(obj:any){
  return this.http.post(this.baseURL+'/Roles/GetRoles',JSON.stringify(obj),headersData)
}
editdetails(user_Id:any){
  return this.http.post(this.URL,
    JSON.stringify(user_Id),
    headersData)
}
}
