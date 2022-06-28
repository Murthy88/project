import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const headersData = {
  headers: new HttpHeaders({
    'Content-Type':'application/json; charset=utf-8',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class ItemgrpService {

url:string='https://saapi.azaz.com/api/ItemGroups'
baseurl:string='https://saapi.azaz.com/api'
  constructor(private http:HttpClient) { }

  viewigrp(){
    return this.http.get('https://saapi.azaz.com/api/ItemGroups')
  }
addgrp(obj:any){
  return this.http.post(this.url,JSON.stringify(obj),headersData)
}

groupid(id:any){
  return this.http.get('https://saapi.azaz.com/api/ItemGroups/'+id)
}
edit(id:any,data:any){
  return this.http.put(this.baseurl+'/ItemGroups/'+id,data)
}
delete(id:any){
  return this.http.delete(this.baseurl+'/ItemGroups/'+id)
}
}
