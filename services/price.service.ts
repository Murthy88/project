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
export class PriceService {
  url:string='https://saapi.azaz.com/api/ItemPriceDetails'
  constructor(private http:HttpClient) { }

   viewprice(){
    return this.http.get('https://saapi.azaz.com/api/ItemPriceDetails')
   }
   add(obj:any){
return this.http.post(this.url,JSON.stringify(obj),headersData)
   }
   viewone(id:any){
    return this.http.get('https://saapi.azaz.com/api/ItemPriceDetails/'+id)
   }
   editprice(id:any,data:any){
    return this.http.put('https://saapi.azaz.com/api/ItemPriceDetails/'+id,data)
   }
   deleteid(id:any){
    return this.http.delete('https://saapi.azaz.com/api/ItemPriceDetails/'+id)
   }
}
