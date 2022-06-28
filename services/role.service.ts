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
export class RoleService {
  baseurl:string='https://saapi.azaz.com/api'
  url:string="https://saapi.azaz.com/api/AdminRoles"
  constructor(private http:HttpClient ) { }
  addrole(obj:any){
    const headersValue = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this.http.post(this.url,JSON.stringify(obj),headersValue);
  }
viewrole(){
  return this.http.get(" https://saapi.azaz.com/api/AdminRoles")
}
editrole(id:any,data:any){
  return this.http.put(this.baseurl+'/AdminRoles/'+id,data)
}
viewone(id:any){
  return this.http.get(this.baseurl+'/AdminRoles/'+id)
}
deleteid(id:any){
return this.http.delete(this.baseurl+'/AdminRoles/'+id)
}
}
