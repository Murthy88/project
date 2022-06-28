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
export class ItemsService {
url:any="https://saapi.azaz.com/api/ItemPrivilages"
baseurl:string='https://saapi.azaz.com/api'
// baseurl:string= 'https://saapi.azaz.com/api/'
  constructor(private http:HttpClient) { }

viewitem(){
  return this.http.get('https://saapi.azaz.com/api/ItemPrivilages')
}

additems(obj:any){
  return this.http.post(this.url,JSON.stringify(obj),headersData)
}
itemid(id:any){
return this.http.get('https://saapi.azaz.com/api/ItemPrivilages/'+id)
}
deleteitem(id:any){
return this.http.delete(this.baseurl+'/ItemPrivilages/'+id)
}
edititem(id:any,data:any){
  return this.http.put(this.baseurl+'/ItemPrivilages/'+id,data)
}
upload(obj:any){
let formdata:any=new FormData();
formdata.append('file to upload',obj)
return this.http.post('https://saapi.azaz.com/api/Upload/',formdata)
}
}
