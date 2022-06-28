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
export class PrivilagesService {

  url:string='https://saapi.azaz.com/api/AdminPrivilages'

 baseurl:string='https://saapi.azaz.com/api'
  constructor(private http:HttpClient) { }
  viewprivilage(){
    return this.http.get('https://saapi.azaz.com/api/AdminPrivilages')
  }
  addprivilage(obj:any){
    return this.http.post(this.url,JSON.stringify(obj),headersData)
  }

  privilageid(id:any){
    return this.http.get('https://saapi.azaz.com/api/AdminPrivilages/'+id)
  }
  editprivilage(id:any,data:any){
    return this. http.put(this.baseurl+'/AdminPrivilages/'+id,data)
  }
  delete(id:any){
    return this.http.delete(this.baseurl+'/AdminPrivilages/'+id)
  }
}
