import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
const headersData = {
  headers: new HttpHeaders({
    'Content-Type':'application/json; charset=utf-8',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
url:string=' https://saapi.azaz.com/api/AdminLogins'

baseurl:string='https://saapi.azaz.com/api'

  constructor(private http:HttpClient) { }

viewuser(){
  return this.http.get('https://saapi.azaz.com/api/AdminLogins')

}
adduser(obj:any){
  return this.http.post(this.url,JSON.stringify(obj),headersData)
}
userid(id:any){
return this.http.get(this.baseurl+'/AdminLogins/'+id)
}

edituser(id:any,data:any){
  return this.http.put(this.baseurl+'/AdminLogins/'+id,data)
}
delete(id:any){
  return this.http.delete(this.baseurl+'/AdminLogins/'+id)
}
}
